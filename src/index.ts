// Methods
import {
  createBrowserClient,
  createServerClient,
} from "./utils/createSupabaseClient";

// Types
import type { Session, User, SupabaseClient } from "@supabase/supabase-js";

export type { Session, User, SupabaseClient };

// Combine methods into a default export
const SupabaseHelpers = {
  createBrowserClient,
  createServerClient,
};

export default SupabaseHelpers;
