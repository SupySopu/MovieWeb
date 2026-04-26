import type { Cast } from "../../../types/Cast";
import CastTagApi from "../CastTagApi/CastTagApi";

interface CastListProps {
  cast: Cast[] | string[];
}

export default function CastList({ cast }: CastListProps) {
  return (
    <div className="cast-tags">
      {cast.map((item, index) => {
        // Hacemos que sea un objeto
        const isApi = typeof item === "object";
        
        const name = isApi ? item.name : item;
        const character = isApi ? item.character : "Actor";
        const id = isApi ? item.id : index;

        return (
          <CastTagApi
            key={id}
            id={id}
            name={name}
            character={character}
          />
        );
      })}
    </div>
  );
}