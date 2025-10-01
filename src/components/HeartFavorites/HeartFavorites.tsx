import { Button } from "@headlessui/react";
import { IoHeartOutline } from "react-icons/io5";

export default function HeartFavorites() {
  return (
    <>
    <Button>
      <IoHeartOutline className="icon-heart" />
    </Button>
    </>
  )
}
