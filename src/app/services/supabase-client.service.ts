import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, SupabaseClientOptions } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseClientService {
  private _supabase: SupabaseClient | null = null;

  get client(): SupabaseClient {
    if (!this._supabase) {
      // Configuration pour éviter les conflits de verrous Navigator
      const options: SupabaseClientOptions<'public'> = {
        auth: {
          storage: typeof window !== 'undefined' ? {
            getItem: (key: string) => {
              try {
                return window.localStorage.getItem(key);
              } catch (e) {
                return null;
              }
            },
            setItem: (key: string, value: string) => {
              try {
                window.localStorage.setItem(key, value);
              } catch (e) {
                // Ignore storage errors
              }
            },
            removeItem: (key: string) => {
              try {
                window.localStorage.removeItem(key);
              } catch (e) {
                // Ignore storage errors
              }
            }
          } : undefined,
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false,
          flowType: 'pkce'
        },
        global: {
          headers: {}
        },
        db: {
          schema: 'public'
        }
      };

      this._supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey,
        options
      );
    }
    return this._supabase;
  }
}

