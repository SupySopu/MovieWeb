import type { CastTagProps } from "../../types/Cast";

export default function CastTag({ id, character, name }: CastTagProps) {
  return (
    <span key={id} className="cast-tag">
      {name} — <small>{character}</small>
    </span>
  );
}