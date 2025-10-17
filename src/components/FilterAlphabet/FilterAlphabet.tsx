import { Select } from "@headlessui/react";

export default function FilterAlphabet() {
  return (
    <div className="filter-alphabet">
      <Select name="alphabet" className="filter-alphabet-input" aria-label="Movie Name">
        <option value="descend">A - Z</option>
        <option value="ascend">Z - A</option>
        <div className="arrow"></div>
      </Select>
    </div>
  )
}
