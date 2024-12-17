import { getEditionsFromLocal } from "@/features/editions/api";
import EditionList from "@/features/editions/components/EditionList";

export default async function Home() {
  const editions = await getEditionsFromLocal();
  return (
    <div className="">
      <EditionList editions={editions} />
    </div>
  );
}
