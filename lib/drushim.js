const DRUSIM_ACTOR =
  "https://api.apify.com/v2/actors/blackfalcondata~drushim-scraper/run-sync-get-dataset-items";

export async function fetchDrushim({ query = "מפתח", maxResults = 24 } = {}) {
  const token = process.env.APIFY_TOKEN;
  if (!token) {
    throw new Error("APIFY_TOKEN is not set");
  }

  const response = await fetch(`${DRUSIM_ACTOR}?token=${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, maxResults }),
  });

  if (!response.ok) {
    throw new Error(`Drushim fetch failed ${response.status}`);
  }

  return response.json();
}
