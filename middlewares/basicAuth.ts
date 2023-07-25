import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { MiddlewareFactory } from "./types";

export const withBasicAuth: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const authheader = request.headers.get('authorization') || request.headers.get('Authorization');
        const authuser = process.env.AUTH_USER;
        const authPwdArray = process.env.AUTH_PWD?.split(',');

        if (!authuser || !authPwdArray || authPwdArray.length === 0) {
            return NextResponse.next();
        }

        if (!authheader) {
            return new NextResponse(
                JSON.stringify({
                    success: 'false',
                    message: 'Authorization Required'
                }),
                { status: 401, headers: { 'WWW-authenticate': 'Basic realm=Authorization Required' } }
            )
        }

        const authValue = authheader.split(' ')[1]
        const [user, pwd] = atob(authValue).split(':')

        if (user !== authuser || authPwdArray.indexOf(pwd) === -1) {
            return new NextResponse(
                JSON.stringify({
                    success: 'false',
                    message: 'Authorization Failed'
                }),
                { status: 401, headers: { 'WWW-authenticate': 'Basic realm=Authorization Required' } }
            )
        }
        return next(request, _next);
    }
}
