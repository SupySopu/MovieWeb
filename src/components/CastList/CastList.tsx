import type { Cast } from "../../types/Cast";
import CastTag from "../CastTag/CastTag";

interface CastListProps {
  cast: Cast[];
}

export default function CastList({ cast }: CastListProps) {
  return (
    <div className="cast-tags">
      {cast.map((actor) => (
        <CastTag
          key={actor.id}
          id={actor.id}
          character={actor.character}
          name={actor.name}
        />
      ))}
    </div>
  );
}