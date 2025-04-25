import Button from "./Button";

interface PostPreviewProps {
  img: string,
}

export default function PostPreview(props: PostPreviewProps) {
  return (
    <div className="w-full flex flex-row gap-4 justify-evenly border-1 border-[var(--damask)] p-4 rounded-lg bg-[var(--secondary)] text-[var(--damask)]">
      <div className="w-full flex flex-col gap-8 p-2 justify-center">
        <div className="d-respira text-2xl font-bold">Here's what a sample blog title would look like.</div>
        <div className="d-respira">And here's what that post's extended description might say. Lorem ipsum dolor sit amet. Something something something.</div>
        <Button title="Read More" />
      </div>
      <div className="w-full border-1 border-[var(--paper)] h-64 rounded-lg">
        <img className="w-full h-full object-cover rounded-lg" src={props.img} />
      </div>
    </div>
  )
}
