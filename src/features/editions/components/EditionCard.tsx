import { Translation } from "../types";

type Props = {
  translation: Translation;
};

const EditionCard: React.FC<Props> = ({ translation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          {translation.name}
        </h2>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="font-medium w-20">Author:</span>
            <span>{translation.author}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium w-20">Language:</span>
            <span>{translation.language}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium w-20">Direction:</span>
            <span>{translation.direction.toUpperCase()}</span>
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 flex items-center">
          <span className="font-medium w-20">Source:</span>
          <a
            href={translation.source}
            className="text-blue-600 hover:text-blue-800 truncate"
            target="_blank"
          >
            {translation.source}
          </a>
        </p>
      </div>
    </div>
  );
};

export default EditionCard;
