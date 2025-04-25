import Separator from "./decorations/Separator";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2">
      <Separator />
      <div className="w-full flex flex-row items-center justify-evenly d-respira font-extrabold">
        <p>ARTWORK</p>
        <p>ARTICLES</p>
      </div>
      <Separator />
    </div>
  )
}
