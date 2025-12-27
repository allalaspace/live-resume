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
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase-client.service.ts:12',message:'Creating Supabase client',data:{url:environment.supabaseUrl,keyPrefix:environment.supabaseKey?.substring(0,20)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
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

