import { ArtistCard } from "../../components/home";
import { artists } from "../../mocks/artists";
import { shuffleArray } from "../../utils/shuffleArray";

function Artists() {
  const shuffleArtists = shuffleArray(artists);
  return (
    <>
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Artists</h2>
        <h3 className="text-xl font-medium text-main">
          Enjoy the music with them
        </h3>

        <div className="mt-2 p-2">
          <section className="flex flex-wrap items-center justify-start gap-4">
            {shuffleArtists.map((artist) => (
              <ArtistCard
                key={artist.username}
                image={artist.image}
                href={`/artist/${artist.username}`}
                name={artist.name}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
export default Artists;
