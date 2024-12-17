"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error); // could use something like datadog to log the error
  }, [error]);

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
