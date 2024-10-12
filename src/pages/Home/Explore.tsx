import { ArtistCard, LargeBanner } from "../../components/home";
import { artists } from "../../mocks/artists";
import { shuffleArray } from "../../utils/shuffleArray";

function Explore() {
  const shuffleArtists = shuffleArray(artists);
  return (
    <>
      <main className="p-6">
        <h2 className="text-xl font-semibold">Explore Apple Music</h2>
        <div className="flex flex-col items-center justify-center">
          <section className="maxLaptop:flex-col flex flex-col items-center justify-center gap-4 md:flex-col lg:flex-row">
            <LargeBanner
              hrefImg="/artists/ligthsum"
              image="/assets/banners/ligthsum.webp"
            />
            <div className="flex w-full flex-wrap justify-center gap-4 transition-all duration-500 ease-in-out md:flex-wrap">
              {shuffleArtists.slice(0, 4).map((artist) => (
                <ArtistCard
                  key={artist.username}
                  image={artist.image}
                  href={`/artist/${artist.username}`}
                  name={artist.name}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default Explore;
