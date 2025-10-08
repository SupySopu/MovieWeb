import type { CastTagProps } from "../../types/Movie"

export default function CastTag({cast}: CastTagProps) {
  return (
    <div className="cast-tags">
      {cast.map((castTag: string, i: number) => (
        <span key={i} className="cast-tag">{castTag}</span>
      ))}
    </div>
  )
}
