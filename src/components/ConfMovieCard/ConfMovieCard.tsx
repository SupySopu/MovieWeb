import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

export default function ConfMovieCard() {
  return (
    <div className='conf-movie-card'>
        <Menu>
            <MenuButton className="menu-btn"><HiDotsHorizontal /></MenuButton>
            <MenuItems anchor="bottom">
                <MenuItem>
                    <a className="edit-btn" href="/movie/edit">
                        <HiPencilSquare />
                        Edit Movie
                    </a>
                </MenuItem>
                <MenuItem>
                    <a className="" href="/">
                        <FaTrashCan />
                        Delete Movie
                    </a>
                </MenuItem>
            </MenuItems>
        </Menu>
    </div>
  )
}
