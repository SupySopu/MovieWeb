import type { CastTagProps } from "../../../types/Cast"
import "./CastTagApi.scss"

export default function CastTagApi({ id, character, name }: CastTagProps) {
  return (
    <span key={id} className="castTag">
        {name} - {character}
    </span>
  )
}
