import { QuranEditions } from "../types";
import EditionCard from "./EditionCard";

type Props = {
  editions: QuranEditions;
};

const EditionList: React.FC<Props> = ({ editions }) => {
  return (
    <div>
      {Object.keys(editions).map((key) => (
        <EditionCard key={key} translation={editions[key]} />
      ))}
    </div>
  );
};

export default EditionList;
