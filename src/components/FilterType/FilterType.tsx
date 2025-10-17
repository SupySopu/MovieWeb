import { Select } from '@headlessui/react'

export default function FilterType() {
  return (
    <div className="filter-type">
      <Select name="status" className="filter-type-input" aria-label="Movie Type">
        <option value="local">Api</option>
        <option value="api">Community</option>
      </Select>
    </div>
  )
}