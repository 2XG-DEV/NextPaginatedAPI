import { QuranEditions } from "../types";
import EditionCard from "./EditionCard";
import {
  PaginatedResponse,
  PaginationControls,
} from "@/features/utils/pagination";

type Props = {
  data: PaginatedResponse<QuranEditions>;
  currentPage: number;
};

export default function EditionList({ data, currentPage }: Props) {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data.data).map(([key, translation]) => (
          <EditionCard key={key} translation={translation} />
        ))}
      </div>

      <PaginationControls currentPage={currentPage} data={data.metadata} />
    </div>
  );
}
