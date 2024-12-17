import { Translation } from "../types";

type Props = {
  translation: Translation;
};

const EditionCard: React.FC<Props> = ({ translation }) => {
  return (
    <div className="border p-4 my-4">
      <h2 className="text-xl font-bold">{translation.name}</h2>
      <p>Author: {translation.author}</p>
      <p>Language: {translation.language}</p>
      <p>Direction: {translation.direction}</p>
      <p>Source: {translation.source}</p>
    </div>
  );
};

export default EditionCard;
