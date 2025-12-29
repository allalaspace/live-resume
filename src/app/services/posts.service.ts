import { Injectable } from '@angular/core';
import { SupabaseClientService } from './supabase-client.service';
import { IPost, IPostInternationalization } from '../posts/posts-interfaces';
import { Observable, from, map } from 'rxjs';

interface PostRow {
  id: string;
  thumbnail: string;
  http: string | null;
  date: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

interface PostInternationalizationRow {
  id: string;
  post_id: string;
  language: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private supabaseClientService: SupabaseClientService) {}

  private get supabase() {
    return this.supabaseClientService.client;
  }

  // Récupérer tous les posts avec leurs internationalisations
  getPosts(): Observable<IPost[]> {
    return from(
      this.supabase
        .from('posts')
        .select(`
          *,
          post_internationalizations (*)
        `)
        .order('order_index', { ascending: false })
        .order('date', { ascending: false })
    ).pipe(
      map(response => {
        if (response.error) {
          console.error("Erreur lors de la récupération des posts:", response.error);
          return [];
        }

        const posts = (response.data || []) as (PostRow & {
          post_internationalizations: PostInternationalizationRow[];
        })[];

        return posts.map(post => {
          const internationalizations: IPostInternationalization[] = 
            (post.post_internationalizations || []).map(intl => ({
              language: intl.language,
              title: intl.title,
              description: intl.description
            }));

          return {
            thumbnail: post.thumbnail,
            http: post.http || '',
            date: post.date,
            internationalizations: internationalizations
          } as IPost;
        });
      })
    );
  }

  // Récupérer un post par ID
  async getPostById(id: string): Promise<IPost | null> {
    try {
      const { data, error } = await this.supabase
        .from('posts')
        .select(`
          *,
          post_internationalizations (*)
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error("Erreur lors de la récupération du post:", error);
        return null;
      }

      if (!data) return null;

      const post = data as PostRow & {
        post_internationalizations: PostInternationalizationRow[];
      };

      const internationalizations: IPostInternationalization[] = 
        (post.post_internationalizations || []).map(intl => ({
          language: intl.language,
          title: intl.title,
          description: intl.description
        }));

      return {
        thumbnail: post.thumbnail,
        http: post.http || '',
        date: post.date,
        internationalizations: internationalizations
      } as IPost;
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      return null;
    }
  }
}

