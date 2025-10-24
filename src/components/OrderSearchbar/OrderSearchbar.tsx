import { Select } from '@headlessui/react'

export default function OrderSearchbar() {
  return (
    <div className="order">
      <Select name="status" className="filter-rating-input" aria-label="Movie Rating">
        <option value="descend">Best Rating</option>
        <option value="ascend">Worst Rating</option>
        <option value="descend">A - Z</option>
        <option value="ascend">Z - A</option>
      </Select>
    </div>
  )
}