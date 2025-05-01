interface MdxImageProps {
  src?: string,
  alt?: string,
}

export default function MdxImage(props: MdxImageProps) {
  console.log(props);
  return (
    <div className="drop-shadow-2xl flex flex-col">
      <img className="border-1 border-[var(--damask)] rounded-bl-xl rounded-t-xl w-full object-contain" src={props.src} alt={props.alt} />
      <div className="p-4 rounded-b-xl bg-[var(--damask)] text-[var(--paper)] border-1 border-[var(--damask)] text-end w-full">
        {props.alt}
      </div>
    </div>
  )
}
