"use client";

type FilterProps = {
  options: string[];
  name: string;
  defaultValue?: string;
};

export default function Filter({ options, defaultValue, name }: FilterProps) {
  return (
    <div className="mb-4">
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full max-w-xs px-4 py-2 border rounded"
        onChange={(e) => {
          // Auto-submit the form when selection changes
          e.target.form?.submit();
        }}
      >
        <option value="">All options</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
