import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server'
import { MiddlewareFactory } from "./types";

import { ChatBody } from '@/types/chat';

export const withPluginChat: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        if (!request.nextUrl.pathname.startsWith('/api/chat')) {
            return next(request, _next);
        }
        const cloned = request.clone();
        const chatBody = (await cloned.json()) as ChatBody;
        if (chatBody.pluginUrlList && chatBody.pluginUrlList.length > 0) {
            return NextResponse.redirect(new URL('/api/plugin-chat', request.url));
        }
        return next(request, _next);
    }
};
