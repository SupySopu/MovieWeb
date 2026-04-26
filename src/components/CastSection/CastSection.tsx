import type { Cast } from "../../types/Cast";
import CastList from "../API/CastListApi/CastListApi";

interface CastSectionProps {
  type: "api" | "local";
  apiCast?: Cast[];  
  localCast?: string[]; 
}

export default function CastSection({ type, apiCast, localCast }: CastSectionProps) {
  return (
    <div className="cast-container">
      <h3>Cast</h3>
      {type === "api" ? (
        apiCast && apiCast.length > 0 ? <CastList cast={apiCast} /> : <p>No cast found</p>
      ) : (
        localCast && localCast.length > 0 ? <CastList cast={localCast} /> : <p>No local cast added</p>
      )}
    </div>
  );
}