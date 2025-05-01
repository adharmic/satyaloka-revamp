import { lazy, Suspense } from "react";
import { useParams } from "react-router";
import MdxH1 from "./markdown/MdxH1";
import { getArticle } from "../utilities/content-manager";
import SectionHeader from "./SectionHeader";

export default function Article() {
  const { slug } = useParams();
  const frontmatter = getArticle(slug || "");
  const MdxArticle = lazy(() => import(`../content/articles/${slug}.mdx`));
  console.log(frontmatter);

  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <SectionHeader title={frontmatter?.title} />
      <div className="rounded-xl mb-8">
        <img className="object-contain rounded-lg border-2 border-[var(--damask)]" src={frontmatter?.img} />
      </div>
      <div className="flex flex-col gap-8 text-lg im-fell">
        <MdxArticle components={{ h1: MdxH1 }} />
      </div>
    </Suspense>
  )

}
