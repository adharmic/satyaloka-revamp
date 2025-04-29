import { lazy, Suspense } from "react";
import { useParams } from "react-router";
import SectionHeader from "./SectionHeader";

export default function Article() {
  const { slug } = useParams();
  const MdxArticle = lazy(() => import(`../content/articles/${slug}.mdx`));

  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <MdxArticle components={{ h1: SectionHeader }} />
    </Suspense>
  )

}
