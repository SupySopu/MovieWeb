import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";

export default function FilterGenre() {

  const genres = [
    {label: "Indie"},
    {label: "Indie"},
    {label: "Indie"},
    {label: "Indie"},
    {label: "Indie"}
  ]

  return (
    <div>
        <Menu>
            <MenuButton as={Fragment}>Genre</MenuButton>
            <MenuItems anchor="bottom">
                <MenuItem>Indie</MenuItem>
                <MenuItem>Indie</MenuItem>
                <MenuItem>Indie</MenuItem>
            </MenuItems>
        </Menu>
    </div>
  )
}
