import { ArtistCard, ArtistHomeCard, MyVideoCard } from "../../components/home";
import { MyDivider } from "../../components/content";
import { artists } from "../../mocks/artists";
import { shuffleArray } from "../../utils/shuffleArray";

function MainBanner() {
  const shuffleArtists = shuffleArray(artists);
  const randomSingleArtist = shuffleArtists[artists.length - 1];
  return (
    <>
      <h2 className="text-xl font-semibold">Home</h2>
      <MyDivider />
      <h3 className="text-lg font-semibold">Featured suggestions for you</h3>
      <section className="my-2 flex gap-4 overflow-x-auto whitespace-nowrap">
        <MyVideoCard
          shortMessage="Video from Apple Everyday on YouTube"
          href="/explore"
          video="/assets/videos/AppleMusicAnthem.mp4"
        />
        <ArtistHomeCard
          image={randomSingleArtist.image}
          href={`/artist/${randomSingleArtist.username}`}
          name={randomSingleArtist.name}
          shortMessage={randomSingleArtist.shortMessage}
        />

        {shuffleArtists.map((artist) => (
          <article className="inline-block" key={artist.username}>
            <h4 className="mb-2 text-sm text-slate-400">
              {artist.shortMessage}
            </h4>
            <ArtistCard
              image={artist.image}
              href={`/artist/${artist.username}`}
              name={artist.name}
            />
          </article>
        ))}
      </section>
    </>
  );
}
export default MainBanner;
