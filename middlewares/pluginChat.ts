import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server'
import { MiddlewareFactory } from "./types";

import { ChatBody } from '@/types/chat';

export const withPluginChat: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        // vercel bugs in request.clone makes me put auth code verification here
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


        if (!request.nextUrl.pathname.startsWith('/api/chat')) {
            return next(request, _next);
        }
        const chatBody = body as ChatBody;
        if (chatBody.pluginUrlList && chatBody.pluginUrlList.length > 0) {
            return NextResponse.redirect(new URL('/api/plugin-chat', request.url));
        }
        return next(request, _next);
    }
};
