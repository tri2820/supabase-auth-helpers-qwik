import { RequestEventBase } from '@builder.io/qwik-city';
import { CookieOptionsWithName, SupabaseClientOptionsWithoutAuth } from '@supabase/auth-helpers-shared';
import { SupabaseClient } from '@supabase/supabase-js';
import { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types';

export declare function createBrowserClient<Database = any, SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>(supabaseUrl: string, supabaseKey: string, { options, cookieOptions, }?: {
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptionsWithName;
}): SupabaseClient<Database, SchemaName, Schema>;
/**
 * ## Authenticated Supabase client
 *
 * ### Loader
 *
 * ```ts
 * import { createServerClient } from '@supabase/auth-helpers-qwik';
 * import { routeLoader$ } from '@builder.io/qwik-city';
 *
 * export const useSession = routeLoader$(async (requestEv) => {
 *   const supabaseClient = createServerClient(
 *     import.meta.env.PUBLIC_SUPABASE_URL,
 *     import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
 *     requestEv
 *   );
 *
 *   const { data } = await supabaseClient.from('test').select('*');
 *
 *   return {
 *     data,
 *   };
 * });
 * ```
 *
 * ### Action
 *
 * ```ts
 * import { createServerClient } from '@supabase/auth-helpers-remix';
 * import { routeAction$ } from '@builder.io/qwik-city';
 *
 * export const useaction = routeAction$(async (_, requestEv) => {
 *   const response = new Response();
 *
 *   const supabaseClient = createServerClient(requestEv);
 *
 *   const { data } = await supabaseClient.from('test').select('*');
 *
 *   return { data };
 * });
 * ```
 *
 * ### Component
 *
 * ```ts
 * import { createBrowserClient } from '@supabase/auth-helpers-remix';
 * import { useVisibleTask$ } from '@builder.io/qwik';
 *
 * useVisibleTask$(() => {
 *   const supabaseClient = createBrowserClient(
 *     import.meta.env.PUBLIC_SUPABASE_URL,
 *     import.meta.env.PUBLIC_SUPABASE_ANON_KEY
 *   );
 *
 *   const getData = async () => {
 *     const { data: supabaseData } = await supabaseClient.from('test').select('*');
 *
 *     console.log({ data });
 *   };
 *
 *   getData();
 * }, []);
 * ```
 */
export declare function createServerClient<Database = any, SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>(supabaseUrl: string, supabaseKey: string, requestEv: RequestEventBase, opts?: {
    options?: SupabaseClientOptionsWithoutAuth<SchemaName>;
    cookieOptions?: CookieOptionsWithName;
}): SupabaseClient<Database, SchemaName, Schema>;
