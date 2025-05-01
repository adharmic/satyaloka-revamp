import { lazy, Suspense } from "react";
import { useParams } from "react-router";
import MdxH1 from "./markdown/MdxH1";
import MdxTitle from "./markdown/MdxTitle";
import MdxImage from "./markdown/MdxImage";
import { getArticle } from "../utilities/content-manager";

export default function Article() {
  const { slug } = useParams();
  const frontmatter = getArticle(slug || "");
  const MdxArticle = lazy(() => import(`../content/articles/${slug}.mdx`));
  console.log(frontmatter);

  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <MdxTitle >
        {frontmatter?.title}
      </MdxTitle>
      <div className="rounded-xl">
        <img className="object-contain rounded-bl-lg border-2 border-[var(--damask)]" src={frontmatter?.img} />
      </div>
      <div className="text-end p-4 bg-[var(--damask)] w-fit rounded-b-xl self-end text-[var(--paper)]">
        {`Published on ${new Date(frontmatter?.date || 0).toLocaleDateString()}`}
      </div>
      <div className="flex flex-col gap-8 text-lg im-fell">
        <MdxArticle components={{ h1: MdxH1, img(props: object) { return <MdxImage {...props} /> } }} />
      </div>
    </Suspense>
  )

}
