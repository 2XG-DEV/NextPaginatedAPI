import { PaginatedResponse } from "@/features/utils/pagination";
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

export async function getEditionsFromLocal(
  query: string = "",
  page: number = 1,
  limit: number = 10,
  language: string = ""
) {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    query,
    language,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/editions?${params}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch editions");
  }

  const result: PaginatedResponse<QuranEditions> = await response.json();
  return result;
}

export async function getLanguages(): Promise<string[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/languages`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch languages");
  }

  const result = await response.json();
  return result.data;
}
