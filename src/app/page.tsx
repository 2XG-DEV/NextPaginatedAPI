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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Quran Translations
        </h1>

        <form className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <SearchBar
                defaultValue={query}
                name="query"
                placeholder="Search editions..."
              />
            </div>
            <div className="md:w-64">
              <Filter
                name="language"
                options={languages}
                defaultValue={language}
              />
            </div>
            <button type="submit" className="sr-only">
              Submit
            </button>
          </div>
        </form>

        <EditionList data={editions} />

        <div className="mt-8">
          <PaginationControls
            currentPage={currentPage}
            data={editions.metadata}
            extraParams={{ query, language }}
          />
        </div>
      </div>
    </div>
  );
}
