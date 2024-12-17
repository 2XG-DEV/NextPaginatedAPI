import { getEditions } from "@/features/editions/api";

export async function GET() {
  const editions = await getEditions();
  return Response.json(editions);
}
