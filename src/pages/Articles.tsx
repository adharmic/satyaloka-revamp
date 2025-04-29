import SectionHeader from "../components/SectionHeader";
import { getArticles } from "../utilities/content-manager";
import PostPreview from "../components/PostPreview";


export default function Articles() {
  const articles = getArticles();

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Articles" />
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <PostPreview img={article.img} link={article.slug} title={article.title} description={article.description} />
          </div>
        )
      })}
    </div >
  )
}
