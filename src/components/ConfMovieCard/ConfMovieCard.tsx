import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from '@tanstack/react-router';

export default function ConfMovieCard() {
  return (
    <div className='conf-movie-card'>
      <Menu>
        <MenuButton className="menu-btn">
          <HiDotsHorizontal />
        </MenuButton>

        <MenuItems className="btns-menu">
          <MenuItem as={Link} to="/movie/edit" className="edit-btn">
            <HiPencilSquare />
            Edit Movie
          </MenuItem>
          <MenuItem as={Link} className="delete-btn">
            <FaTrashCan />
            Delete Movie
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}