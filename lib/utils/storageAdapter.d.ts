import { RequestEventBase } from '@builder.io/qwik-city';
import { CookieOptions, CookieAuthStorageAdapter } from '@supabase/auth-helpers-shared';

export declare class QwikServerAuthStorageAdapter extends CookieAuthStorageAdapter {
    private readonly requestEv;
    constructor(requestEv: RequestEventBase, cookieOptions?: CookieOptions);
    protected getCookie(name: string): string | null | undefined;
    protected setCookie(name: string, value: string): void;
    protected deleteCookie(name: string): void;
}
