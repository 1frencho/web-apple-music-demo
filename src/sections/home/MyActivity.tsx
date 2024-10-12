import { AlbumCard } from "../../components/home/AlbumCard";
import { albums } from "../../mocks/albums";
import { shuffleArray } from "../../utils/shuffleArray";
function MyActivity() {
  const shuffleAlbums = shuffleArray(albums);
  return (
    <>
      <h3 className="text-lg font-semibold">Your activity</h3>
      <section className="my-2 flex gap-4 overflow-x-auto whitespace-nowrap">
        {shuffleAlbums.map((album) => (
          <AlbumCard
            key={album.title}
            image={album.image}
            href={`/album/${album.slug}`}
            title={album.title}
            artist={album.artist}
            username={album.username}
          />
        ))}
      </section>
    </>
  );
}
export default MyActivity;
