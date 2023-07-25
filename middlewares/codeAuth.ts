import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server'
import { MiddlewareFactory } from "./types";

export const withCodeAuth: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        if (!request.nextUrl.pathname.startsWith('/api')) {
            return next(request, _next);
        }
        const cloned = request.clone();
        const body = await cloned.json();
        const authPwdArray = process.env.AUTH_PWD?.split(',') || [];
        const authCode = body?.authCode;
        if (authPwdArray.indexOf(authCode) === -1) {
            return new NextResponse(
                JSON.stringify({
                    success: 'false',
                    message: 'Code Authorization Failed'
                })
            )
        }
        return next(request, _next);
    }
};