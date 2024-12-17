import EditionList from "@/features/editions/components/EditionList";
import { getEditionsFromLocal } from "@/features/editions/api";
import { PaginationControls } from "@/features/utils/pagination";
import SearchBar from "@/features/utils/search";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    query?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; // we have to await params as per nextjs docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const query = params.query || "";
  const currentPage = Math.max(1, parseInt(params.page || "1"));
  const limit = Math.max(1, parseInt(params.limit || "10"));

  const editions = await getEditionsFromLocal(query, currentPage, limit);

  return (
    <div className="container mx-auto px-4">
      <SearchBar defaultValue={query} name="query" />
      <EditionList data={editions} />{" "}
      <PaginationControls currentPage={currentPage} data={editions.metadata} />
    </div>
  );
}
