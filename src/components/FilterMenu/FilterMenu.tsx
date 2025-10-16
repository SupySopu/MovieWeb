import FilterAlphabet from '../FilterAlphabet/FilterAlphabet'
import FilterGenre from '../FilterGenre/FilterGenre'
import FilterRating from '../FilterRating/FilterRating'
import FilterType from '../FilterType/FilterType'

export default function FilterBtn() {
  return (
    <div className="filter-btn">
      <FilterAlphabet/>
      <FilterGenre />
      <FilterRating />
      <FilterType />
    </div>
  )
}