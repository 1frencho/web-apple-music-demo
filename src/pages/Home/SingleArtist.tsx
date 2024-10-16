import { useParams } from "react-router-dom";
import { artists } from "../../mocks/artists";
import { FaPlayCircle, FaStar } from "react-icons/fa";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { NotFound } from "../index.lazy";

function SingleArtist() {
  const { artistUsername } = useParams<{
    artistUsername: string | undefined;
  }>();
  const artistSelected = artists.find(
    (artist) => artist.username == artistUsername,
  );
  if (!artistUsername || !artistSelected) {
    return <NotFound message="Artist Not Found" />;
  }
  return (
    <>
      <main className="">
        <section
          className="flex h-[550px] w-full flex-col justify-end gap-2 bg-cover bg-[center_40%] bg-no-repeat p-6"
          style={{
            backgroundImage: `url(${artistSelected.image})`,
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FaPlayCircle size={34} className="text-main" />
              <h3 className="text-2xl font-bold text-white">
                {artistSelected.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button>
                <FaStar size={28} className="myHover text-white" />
              </button>
              <button>
                <PiDotsThreeCircleFill
                  size={28}
                  className="myHover text-white"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default SingleArtist;
