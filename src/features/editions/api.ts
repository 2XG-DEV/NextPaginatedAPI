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
  limit: number = 10
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/editions?page=${page}&limit=${limit}&query=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch editions");
  }

  const result: PaginatedResponse<QuranEditions> = await response.json();
  return result;
}
