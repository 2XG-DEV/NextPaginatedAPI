import { getEditions } from "@/features/editions/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const allEditions = await getEditions();
  const editionEntries = Object.entries(allEditions);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedEditions = Object.fromEntries(
    editionEntries.slice(startIndex, endIndex)
  );

  return Response.json({
    data: paginatedEditions,
    metadata: {
      total: editionEntries.length,
      page,
      limit,
      totalPages: Math.ceil(editionEntries.length / limit),
    },
  });
}
