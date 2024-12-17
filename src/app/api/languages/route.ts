import { getEditions } from "@/features/editions/api";

export async function GET() {
  const allEditions = await getEditions();
  const languages = Object.values(allEditions).map(
    (edition) => edition.language
  );
  const uniqueLanguages = new Set(languages);
  const languageList = Array.from(uniqueLanguages);
  return Response.json({
    data: languageList,
  });
}
