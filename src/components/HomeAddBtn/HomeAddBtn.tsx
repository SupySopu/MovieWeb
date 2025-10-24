import { Button } from "@headlessui/react";
import { Link } from "@tanstack/react-router";

export default function HomeAddBtn() {
  return (
    <>
      <Link as='button' className="home-add-btn">Add your movies</Link>
    </>
  )
}
