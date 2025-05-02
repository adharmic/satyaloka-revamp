import { SlLink } from "react-icons/sl"

interface SquareThumbProps {
  title: string,
  img: string,
  alt?: boolean,
}

export default function SquareThumb(props: SquareThumbProps) {
  return (
    <div className={`drop-shadow-xl w-full lg:w-72 h-full lg:h-100 text-[var(--paper)] border-1 border-[var(--damask)] rounded-lg bg-[var(--red)] ${props.alt && "bg-[var(--secondary)]"}`}>
      <div className="h-full p-4 flex flex-col gap-2">
        <img className={`w-full aspect-square object-cover rounded-lg border-1 ${props.alt && "border-[var(--damask)]" || "border-[var(--paper)]"}`} src={props.img} />
        <div className="h-full d-respira text-xl flex flex-row items-center justify-between">
          <div className={`self-start w-full ${props.alt && "text-[var(--damask)]" || ""}`}>
            {props.title}
          </div>
          <div className="self-end drop-shadow-lg w-12 min-w-12 aspect-square bg-[var(--damask)] rounded-full text-[var(--paper)] flex items-center justify-center text-2xl">
            <SlLink />
          </div>
        </div>
      </div>
    </div>
  )
}
