import { CookieAuthStorageAdapter as d, parseCookies as i, serializeCookie as l, createSupabaseClient as n, BrowserCookieAuthStorageAdapter as o } from "@supabase/auth-helpers-shared";
class g extends d {
  constructor(r, e) {
    super(e), this.requestEv = r;
  }
  getCookie(r) {
    return i(this.requestEv.request.headers.get("Cookie") ?? "")[r];
  }
  setCookie(r, e) {
    const a = l(r, e, {
      ...this.cookieOptions,
      // Allow supabase-js on the client to read the cookie as well
      httpOnly: !1
    });
    this.requestEv.headers.append("set-cookie", a);
  }
  deleteCookie(r) {
    const e = l(r, "", {
      ...this.cookieOptions,
      maxAge: 0,
      // Allow supabase-js on the client to read the cookie as well
      httpOnly: !1
    });
    this.requestEv.headers.append("set-cookie", e);
  }
}
function b(s, r, {
  options: e,
  cookieOptions: a
} = {}) {
  var t;
  if (!s || !r)
    throw new Error(
      "supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard."
    );
  return n(s, r, {
    ...e,
    global: {
      ...e == null ? void 0 : e.global,
      headers: {
        ...(t = e == null ? void 0 : e.global) == null ? void 0 : t.headers,
        "X-Client-Info": "supabase-auth-helpers-qwik@0.0.3"
      }
    },
    auth: {
      storageKey: a == null ? void 0 : a.name,
      storage: new o(a)
    }
  });
}
function S(s, r, e, a) {
  var h;
  const t = a == null ? void 0 : a.options, u = a == null ? void 0 : a.cookieOptions;
  if (!s || !r)
    throw new Error(
      "supabaseUrl and supabaseKey are required to create a Supabase client! Find these under `Settings` > `API` in your Supabase dashboard."
    );
  return n(s, r, {
    ...t,
    global: {
      ...t == null ? void 0 : t.global,
      headers: {
        ...(h = t == null ? void 0 : t.global) == null ? void 0 : h.headers,
        "X-Client-Info": "supabase-auth-helpers-qwik@0.0.3"
      }
    },
    auth: {
      storageKey: u == null ? void 0 : u.name,
      storage: new g(e, u)
    }
  });
}
export {
  b as createBrowserClient,
  S as createServerClient
};
