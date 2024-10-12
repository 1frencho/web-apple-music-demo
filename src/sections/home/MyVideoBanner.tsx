import { Link } from "react-router-dom";

interface MyVideoBannerProps {
  video: string;
}

function MyVideoBanner({ video }: MyVideoBannerProps) {
  return (
    <>
      <h3 className="text-lg font-semibold">Spacial Audio for you</h3>
      <Link to={"/explore"}>
        <section className="my-2 flex h-[300px] w-full gap-4 md:h-[500px]">
          <article className="myBorder relative flex h-full w-full flex-col gap-4 rounded-lg shadow-md">
            <video
              src={video}
              autoPlay
              loop
              muted
              preload="none"
              className="h-full w-full rounded-lg object-cover"
            ></video>
            <div className="absolute inset-0 z-10"></div>
          </article>
        </section>
      </Link>
    </>
  );
}
export default MyVideoBanner;
