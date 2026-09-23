import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AFTER_AUTH_REDIRECT, findOrCreateGoogleUser } from "@/lib/auth";
import {
  OAUTH_STATE_COOKIE,
  getGoogleConfiguration,
  exchangeCodeForProfile,
} from "@/lib/google";
import { createSession } from "@/lib/session";

function redirectWithError(request, code) {
  return NextResponse.redirect(
    new URL(`/register?error=${code}`, request.url),
  );
}

export async function GET(request) {
  const config = getGoogleConfiguration();

  if (!config) return redirectWithError(request, "google_not_configured");

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const cookie = await cookies();
  const savedState = cookie.get(OAUTH_STATE_COOKIE)?.value;
  cookie.delete(OAUTH_STATE_COOKIE);

  if (searchParams.get("error") || !code) {
    return redirectWithError(request, "google_cancelled");
  }

  if (!state || !savedState || state !== savedState) {
    return redirectWithError(request, "google_state_mismatch");
  }

  try {
    const profile = await exchangeCodeForProfile(config, code);
    const user = await findOrCreateGoogleUser(profile);
    await createSession(user._id.toString());
  } catch (error) {
    console.error("Google callback failed:", error);
    return redirectWithError(request, "google_failed");
  }

  return NextResponse.redirect(new URL(AFTER_AUTH_REDIRECT, request.url));
}
