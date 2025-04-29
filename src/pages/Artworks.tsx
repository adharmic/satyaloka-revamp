import SectionHeader from "../components/SectionHeader";
import SquareThumb from "../components/SquareThumb";
import { getArtworks } from "../utilities/content-manager"

export default function Artworks() {
  const artworks = getArtworks();

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Artwork" />
      <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {artworks.map((artwork, index) => {
          return (
            <div key={index}>
              <SquareThumb alt={index % 2 == 1} title={artwork.title} img={artwork.img} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
