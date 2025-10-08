import type { MovieDescriptionProps } from "../../types/Movie"

export default function MovieDescription({ description }: MovieDescriptionProps) {
  return (
    <div className="movie-description">
      {description.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}