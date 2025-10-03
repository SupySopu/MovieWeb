import type { castProp } from "../../types/CastProp"

export default function CastTag({cast}: castProp) {
  return (
    <div className="cast-tags">
            {cast.map((castTag: string, i: number) => (
              <span key={i} className="cast-tag">{castTag}</span>
            ))}
        </div>
  )
}
