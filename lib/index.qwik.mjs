var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { CookieAuthStorageAdapter, parseCookies, serializeCookie, createSupabaseClient, BrowserCookieAuthStorageAdapter } from "@supabase/auth-helpers-shared";
class QwikServerAuthStorageAdapter extends CookieAuthStorageAdapter {
  constructor(requestEv, cookieOptions) {
    super(cookieOptions);
    __publicField(this, "requestEv");
    this.requestEv = requestEv;
  }
  getCookie(name) {
    return parseCookies(this.requestEv.request.headers.get("Cookie") ?? "")[name];
  }
  setCookie(name, value) {
    const cookieStr = serializeCookie(name, value, {
      ...this.cookieOptions,
      // Allow supabase-js on the client to read the cookie as well
      httpOnly: false
    });
    this.requestEv.headers.append("set-cookie", cookieStr);
  }
  deleteCookie(name) {
    const cookieStr = serializeCookie(name, "", {
      ...this.cookieOptions,
      maxAge: 0,
      // Allow supabase-js on the client to read the cookie as well
      httpOnly: false
    });
    this.requestEv.headers.append("set-cookie", cookieStr);
  }
}
function createBrowserClient(supabaseUrl, supabaseKey, { options, cookieOptions } = {}) {
  if (!supabaseUrl || !supabaseKey) throw new Error("supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard.");
  return createSupabaseClient(supabaseUrl, supabaseKey, {
    ...options,
    global: {
      ...options?.global,
      headers: {
        ...options?.global?.headers,
        "X-Client-Info": "supabase-auth-helpers-qwik@0.0.3"
      }
    },
    auth: {
      storageKey: cookieOptions?.name,
      storage: new BrowserCookieAuthStorageAdapter(cookieOptions)
    }
  });
}
function createServerClient(supabaseUrl, supabaseKey, requestEv, opts) {
  const options = opts?.options;
  const cookieOptions = opts?.cookieOptions;
  if (!supabaseUrl || !supabaseKey) throw new Error("supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard.");
  return createSupabaseClient(supabaseUrl, supabaseKey, {
    ...options,
    global: {
      ...options?.global,
      headers: {
        ...options?.global?.headers,
        "X-Client-Info": "supabase-auth-helpers-qwik@0.0.3"
      }
    },
    auth: {
      storageKey: cookieOptions?.name,
      storage: new QwikServerAuthStorageAdapter(requestEv, cookieOptions)
    }
  });
}
export {
  createBrowserClient,
  createServerClient
};
