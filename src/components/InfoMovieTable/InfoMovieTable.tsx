import type { InfoMovieTableProps } from "../../types/Movie"

export default function InfoMovieTable({ popularity, release_date, vote_average, vote_count, genres }: InfoMovieTableProps) {
  return (
    <div className="info-movie-table">
      <div className="top-section">
        <div className="score">
          <span className="score-label">
            Score
          </span>
          <span className="score-value">{vote_average}</span>
        </div>

        <div className="info-right">
          <div className="info-row">
            <span>Ranked: {vote_count}</span>
            <span>Popularity: {popularity}</span>
            <span>{release_date}</span>
          </div>

          <div className="tags">
            {genres.map((genres: {id: number, name: string}) => (
              <span key={genres.id} className="tag">{genres.name}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
