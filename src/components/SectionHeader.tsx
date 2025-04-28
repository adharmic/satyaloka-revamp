interface SectionHeaderProps {
  title: string
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-row items-center gap-0 justify-evenly">
      <div className="w-full border-t-1 border-[var(--damask)]" />
      <div className="border-0 border-[var(--damask)] text-[var(--damask)] p-2 px-4 rounded-sm font-extrabold d-respira text-3xl min-w-fit w-fit flex items-center justify-center text-center">{props.title}</div>
      <div className="w-full border-t-1 border-[var(--damask)]" />
    </div>

  )
}
