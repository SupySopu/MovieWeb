import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function FilterBtn() {
  return (
    <Menu>
      <MenuButton className="filter-btn">Filter</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <p>example</p>
        </MenuItem>
        <MenuItem>
          <p>example</p>
        </MenuItem>
        <MenuItem>
          <p>example</p>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}