import type { InfoMovieTableProps } from "../../types/Movie"

export default function InfoMovieTable({ score, rank, popularity, year, tags }: InfoMovieTableProps) {
  return (
    <div className="info-movie-table">
      <div className="top-section">
        <div className="score">
          <span className="score-label">
            Score
          </span>
          <span className="score-value">{score}</span>
        </div>

        <div className="info-right">
          <div className="info-row">
            <span>Ranked: {rank}</span>
            <span>Popularity: {popularity}</span>
            <span>{year}</span>
          </div>

          <div className="tags">
            {tags.map((tag: string, i: number) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
