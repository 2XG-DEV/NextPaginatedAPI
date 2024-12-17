import { Suspense } from "react";
import EditionList from "@/features/editions/components/EditionList";
import { getEditionsFromLocal } from "@/features/editions/api";

type Props = {
  searchParams: {
    page?: string;
    limit?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; // we have to await the searchParams object as per the nextjs docs
  const currentPage = parseInt(params.page || "1");
  const limit = parseInt(params.limit || "10");

  const editions = await getEditionsFromLocal(currentPage, limit);

  return (
    <div className="container mx-auto px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <EditionList data={editions} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
