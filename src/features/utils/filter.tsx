"use client";

type FilterProps = {
  options: string[];
  name: string;
  defaultValue?: string;
};

export default function Filter({ options, defaultValue, name }: FilterProps) {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      onChange={(e) => e.target.form?.submit()}
    >
      <option value="">All Languages</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
