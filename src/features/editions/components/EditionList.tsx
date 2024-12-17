import { QuranEditions } from "../types";
import EditionCard from "./EditionCard";
import { PaginatedResponse } from "@/features/utils/pagination";

type Props = {
  data: PaginatedResponse<QuranEditions>;
};

export default function EditionList({ data }: Props) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data.data).map(([key, translation]) => (
          <EditionCard key={key} translation={translation} />
        ))}
      </div>
    </div>
  );
}
