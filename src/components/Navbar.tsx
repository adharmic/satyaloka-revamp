import Separator from "./decorations/Separator";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-0">
      <Separator />
      <div className="h-full w-full flex flex-row items-center gap-4 d-respira font-extrabold justify-evenly text-[10px] md:text-lg">
        <Link to="/" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">HOME</Link>
        <div className="h-10 border-r border-[var(--damask)]" />
        <Link to="/about" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ABOUT</Link>
        <div className="h-10 border-r border-[var(--damask)]" />
        <p className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ARTWORK</p>
        <div className="h-10 border-r border-[var(--damask)]" />
        <p className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ARTICLES</p>
      </div>
      <Separator />
    </div>
  )
}
