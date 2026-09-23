import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  OAUTH_STATE_COOKIE,
  buildGoogleAuthUrl,
  getGoogleConfiguration,
} from "@/lib/google";

export async function GET(request) {
  const config = getGoogleConfiguration();

  if (!config) {
    return NextResponse.redirect(
      new URL("/register?error=google_not_configured", request.url),
    );
  }

  const state = crypto.randomUUID();
  const cookie = await cookies();  
  
  cookie.set(OAUTH_STATE_COOKIE, state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 10,
  })

  return NextResponse.redirect(buildGoogleAuthUrl(config, state));
}

