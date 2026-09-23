import { decodeJwt } from "jose";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

export const OAUTH_STATE_COOKIE = "google-oauth-state";

export function getGoogleConfiguration() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) return null;

  return { clientId, clientSecret, redirectUri };
}

export function buildGoogleAuthUrl(config, state) {
  const url = new URL(GOOGLE_AUTH_URL);
  console.log(url);
  url.searchParams.set("client_id", config.clientId);
  url.searchParams.set("redirect_uri", config.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("state", state);
  url.searchParams.set("prompt", "select_account");

  return url.toString();
}

export async function exchangeCodeForProfile(config, code) {
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google token exchange failed: ${details}`);
  }

  const { id_token: idToken } = await response.json();

  if (!idToken) throw new Error("Google response is missing id_token");

  const parsedToken = decodeJwt(idToken);

  if (!parsedToken.sub || !parsedToken.email) {
    throw new Error("Google profile is missing");
  }

  return {
    googleId: parsedToken.sub,
    email: parsedToken.email,
    name: parsedToken.name,
  };
}
