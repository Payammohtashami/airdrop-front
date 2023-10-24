import nookies from "nookies";
import { cookieNames } from "@/config/cookiesName";

export function getCookie(ctx: any) {
    return nookies.get(ctx, { path: "/" });
}

export function getAccessToken(ctx: any) {
    let getCookies = getCookie(ctx);
    return getCookies[cookieNames.accessToken];
};