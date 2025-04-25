import Separator from "./decorations/Separator";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2">
      <Separator />
      <div className="w-full flex flex-row items-center gap-4 d-respira font-extrabold justify-between">
        <p>HOME</p>
        <div className="w-2 aspect-square bg-[var(--damask)] rounded-full" />
        <p>ABOUT</p>
        <div className="w-2 aspect-square bg-[var(--damask)] rounded-full" />
        <p>ARTWORK</p>
        <div className="w-2 aspect-square bg-[var(--damask)] rounded-full" />
        <p>ARTICLES</p>
      </div>
      <Separator />
    </div>
  )
}
