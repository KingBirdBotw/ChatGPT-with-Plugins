import { withBasicAuth } from "./middlewares/basicAuth";
import { withPluginChat } from "./middlewares/pluginChat";
import { withCodeAuth } from "./middlewares/codeAuth";
import { NextResponse } from "next/server";

export function defaultMiddleware() {
  return NextResponse.next();
}
export default withPluginChat(defaultMiddleware);