// Hooks
import { useState } from "react";

// Interfaces
interface CookieOptions {
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: "strict" | "lax" | "none"
};


const useCookies = () => {
    const setCookie = (name: string, value: string, options?: CookieOptions) => {
        const cookieOptions: CookieOptions = options || {};

        let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

        if (cookieOptions.expires) {
            const expires = typeof cookieOptions.expires === "number"
                ? new Date(Date.now() + cookieOptions.expires * 864e5) // days to milliseconds
                : cookieOptions.expires;
            
            cookieStr += `expires=${ expires.toUTCString() };`;
        }

        if (cookieOptions.path) {
            cookieStr += `path=${cookieOptions.path};`;
        }
        if (cookieOptions.domain) {
            cookieStr += `domain=${cookieOptions.domain};`;
        }
        if (cookieOptions.secure) {
            cookieStr += `secure;`;
        }
        if (cookieOptions.sameSite) {
            cookieStr += `samesite=${cookieOptions.sameSite};`;
        }

        document.cookie = cookieStr;
    };

    const getCookie = (name: string, options?: CookieOptions) => {
        const cookies = document.cookie.split("; ").reduce((acc: Record<string, string>, current) => {
            const [cookieName, cookieValue] = current.split("=");
            acc[decodeURIComponent(cookieName)] = decodeURIComponent(cookieValue);
            return acc;
        }, {});

        return cookies[name];
    };

    const removeCookie = (name: string, options?: CookieOptions) => {
        setCookie(name, "", { ...(options || {}), expires: -1 });
    };


    return { getCookie, setCookie, removeCookie };
};


export default useCookies;