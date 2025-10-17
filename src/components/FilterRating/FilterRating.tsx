import { Select } from '@headlessui/react'

export default function FilterRating() {
  return (
    <div className="filter-rating">
      <Select name="status" className="filter-rating-input" aria-label="Movie Rating">
        <option value="descend">Best Rating</option>
        <option value="ascend">Worst Rating</option>
      </Select>
    </div>
  )
}