import { Button } from "@headlessui/react";
import { Link } from "@tanstack/react-router";
import { FaHome } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import "./NavBar.scss";

export default function NavBar(){
    return (
        <div className="navbar">
            <Link to="/" className="">
                <FaHome className="icon"/>
                    Home
            </Link>

            <Link to="/favourites" className="">
                <IoHeartSharp className="icon" />
                    Favourites
            </Link>

            <Link to="/createMovie" className="">
                <Button className="create-movie-btn">
                    +
                </Button>
            </Link>
        </div>
    )
}