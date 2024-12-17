import { QuranEditions } from "./types";

export async function getEditions() {
  const quoranAPIRequest = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json",
    {
      cache: "force-cache", // this is rather static data, no reason to fetch it every time
    }
  );

  const translations: QuranEditions = await quoranAPIRequest.json();

  return translations;
}

export async function getEditionsFromLocal() {
  const quoranAPIRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/editions`
  );

  const translations: QuranEditions = await quoranAPIRequest.json();

  return translations;
}
