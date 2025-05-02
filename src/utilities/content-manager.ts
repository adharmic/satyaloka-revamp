interface ArticleFrontmatter {
  title?: string;
  date?: number;
  description?: string;
  img?: string;
  featured?: boolean;
}

interface MdxArticleModule {
  frontmatter: ArticleFrontmatter,
  default: React.ComponentType
}

interface ArtworkFrontmatter {
  title?: string;
  date?: number;
  description?: string;
  img?: string;
  featured?: boolean;
}

interface MdxArtworkModule {
  frontmatter: ArtworkFrontmatter,
  default: React.ComponentType
}

function getArticle(slug: string) {
  return getArticles().find((article) => article.slug == slug);
}

function getArticles() {
  const articleModules = import.meta.glob<MdxArticleModule>('../content/articles/*.mdx', { eager: true });
  const articles = Object.entries(articleModules).map(([path, module]) => {
    const slug = path.replace('../content/articles/', '').replace(/\.mdx$/, '');
    const frontmatter = module.frontmatter || {};

    return {
      slug,
      title: frontmatter.title || "Untitled Article",
      description: frontmatter.description || "No description given.",
      img: frontmatter.img || "https://plus.unsplash.com/premium_photo-1741194731888-cca7bbc05549?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      featured: frontmatter.featured || false,
      date: frontmatter.date || Date.now(),
    };
  })
  return articles.sort((a, b) => b.date - a.date);
}

function getArtwork(slug: string) {
  return getArtworks().find((artwork) => artwork.slug == slug);
}

function getArtworks() {
  const artworkModules = import.meta.glob<MdxArtworkModule>('../content/artwork/*.mdx', { eager: true });

  const artworks = Object.entries(artworkModules).map(([path, module]) => {
    const slug = path.replace('../content/artwork/', '').replace(/\.mdx$/, '');
    const frontmatter = module.frontmatter || {};

    return {
      slug,
      title: frontmatter.title || "Untitled Artwork",
      description: frontmatter.description || "No description given.",
      img: frontmatter.img || "https://plus.unsplash.com/premium_photo-1741194731888-cca7bbc05549?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      featured: frontmatter.featured || false,
      date: frontmatter.date || Date.now()
    };
  })
  return artworks.sort((a, b) => b.date - a.date);
}

function getFeaturedArticles() {
  return getArticles().filter((article) => article.featured);
}

function getFeaturedArtworks() {
  return getArtworks().filter((article) => article.featured);
}

function getRecentArticles() {
  return getArticles().slice(0, 3)
}

function getRecentArtworks() {
  return getArtworks().slice(0, 3)
}

export { getArticles, getArtworks, getFeaturedArticles, getFeaturedArtworks, getRecentArticles, getRecentArtworks, getArticle, getArtwork }
