"use client";
import Link from "next/link";

export type PaginationMetadata = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type PaginatedResponse<T> = {
  data: T;
  metadata: PaginationMetadata;
};

type PaginationControlsProps = {
  currentPage: number;
  data: PaginationMetadata;
  extraParams?: {
    query?: string;
    language?: string;
  };
};

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  data,
  extraParams = {},
}) => {
  const limitOptions = [10, 20, 50, 100];

  const queryParams = new URLSearchParams({
    ...extraParams,
    limit: data.limit.toString(),
  });

  const getPageUrl = (page: number) =>
    `/?page=${page}&${queryParams.toString()}`;

  return (
    <div>
      <div className="mt-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <span>Items per page:</span>
          <select
            className="border rounded px-2 py-1"
            value={data.limit}
            onChange={(e) => {
              // Reset to page 1 when changing limit
              window.location.href = `/?page=1&limit=${e.target.value}`;
            }}
          >
            {limitOptions.map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Link
          href={getPageUrl(currentPage - 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Previous
        </Link>
        <span className="px-4 py-2">
          Page {currentPage} of {data.totalPages}
        </span>
        <Link
          href={getPageUrl(currentPage + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === data.totalPages
              ? "pointer-events-none opacity-50"
              : ""
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
