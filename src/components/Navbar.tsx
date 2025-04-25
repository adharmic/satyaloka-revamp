import Separator from "./decorations/Separator";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2">
      <Separator />
      <div className="w-full flex flex-row items-center gap-4 d-respira font-extrabold justify-evenly text-[10px] md:text-lg">
        <p>HOME</p>
        <div className="h-10 border-r border-[var(--damask)]" />
        <p>ABOUT</p>
        <div className="h-10 border-r border-[var(--damask)]" />
        <p>ARTWORK</p>
        <div className="h-10 border-r border-[var(--damask)]" />
        <p>ARTICLES</p>
      </div>
      <Separator />
    </div>
  )
}
