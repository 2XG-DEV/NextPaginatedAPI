import EditionList from "@/features/editions/components/EditionList";
import { getEditionsFromLocal, getLanguages } from "@/features/editions/api";
import { PaginationControls } from "@/features/utils/pagination";
import SearchBar from "@/features/utils/search";
import Filter from "@/features/utils/filter";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
    query?: string;
    language?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; // we have to await params as per nextjs docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const query = params.query || "";
  const language = params.language || "";

  const currentPage = Math.max(1, parseInt(params.page || "1"));
  const limit = Math.max(1, parseInt(params.limit || "10"));

  const editions = await getEditionsFromLocal(
    query,
    currentPage,
    limit,
    language
  );

  const languages = await getLanguages();

  return (
    <div className="container mx-auto px-4">
      <form className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar
          defaultValue={query}
          name="query"
          placeholder="Search editions..."
        />
        <Filter name="language" options={languages} defaultValue={language} />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
      <EditionList data={editions} />{" "}
      <PaginationControls
        currentPage={currentPage}
        data={editions.metadata}
        extraParams={{ query, language }}
      />
    </div>
  );
}
