import { Link } from "react-router"

interface ButtonProps {
  title: string,
  link: string
}

export default function Button(props: ButtonProps) {
  return (
    <Link to={props.link} className="text-sm md:text-lg w-fit hover:bg-[var(--damask)] hover:cursor-pointer transition-all border-1 border-[var(--damask)] px-2 rounded-lg bg-[var(--red)] d-respira active:scale-90 text-[var(--paper)]">{props.title}</Link>
  )
}
