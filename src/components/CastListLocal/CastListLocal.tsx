import CastTagLocal from "../CastTagLocal/CastTagLocal";

interface CastListLocalProps {
  cast: string[];
}

export default function CastListLocal({ cast }: CastListLocalProps) {
  return (
    <div className="cast-tags">
      {cast.map((name, index) => (
        <CastTagLocal
          key={index}
          id={index}
          name={name}
        />
      ))}
    </div>
  );
}
