import { Button } from "@headlessui/react";
import type { HeartFavouritesProp } from "../../types/Movie";
import { IoIosHeart } from "react-icons/io";
import "./HeartFavourites.scss";

export default function HeartFavourites({id} : HeartFavouritesProp){
    return (
        <Button className="heartBtn">
            <IoIosHeart className="iconHeartActive"/>
        </Button>
    )
}