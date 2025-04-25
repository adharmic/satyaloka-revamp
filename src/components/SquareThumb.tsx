import { SlLink } from "react-icons/sl"

interface SquareThumbProps {
  title: string,
  img: string
}

export default function SquareThumb(props: SquareThumbProps) {
  return (
    <div className="h-full w-full border-1 border-[var(--damask)] rounded-lg bg-[var(--red)]">
      <div className="p-4 flex flex-col gap-2">
        <img className="w-full aspect-square object-cover rounded-lg border-1 border-[var(--paper)]" src={props.img} />
        <div className="d-respira text-xl text-[var(--paper)] flex flex-row items-center justify-between">
          <div>
            {props.title}
          </div>
          <div className="w-12 aspect-square bg-[var(--damask)] rounded-full text-[var(--paper)] flex items-center justify-center text-2xl">
            <SlLink />
          </div>
        </div>
      </div>
    </div>
  )
}
