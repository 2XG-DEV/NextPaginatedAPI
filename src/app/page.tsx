import EditionList from "@/features/editions/components/EditionList";
import { getEditionsFromLocal } from "@/features/editions/api";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; // we have to await params as per nextjs docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const currentPage = Math.max(1, parseInt(params.page || "1"));
  const limit = Math.max(1, parseInt(params.limit || "10"));

  const editions = await getEditionsFromLocal(currentPage, limit);

  return (
    <div className="container mx-auto px-4">
      <EditionList data={editions} currentPage={currentPage} />
    </div>
  );
}
