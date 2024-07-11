import { createBrowserClient, createServerClient } from './utils/createSupabaseClient';
import { Session, User, SupabaseClient } from '@supabase/supabase-js';

export type { Session, User, SupabaseClient };
declare const SupabaseHelpers: {
    createBrowserClient: typeof createBrowserClient;
    createServerClient: typeof createServerClient;
};
export default SupabaseHelpers;
