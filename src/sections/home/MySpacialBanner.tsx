import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LargeBanner } from "../../components/home";

interface MyVideoBannerProps {
  title: string;
  video: string;
  image: string;
  hrefVideo: string;
  hrefImg: string;
}

function MySpacialBanner({
  video,
  image,
  title,
  hrefVideo,
  hrefImg,
}: MyVideoBannerProps) {
  return (
    <>
      <h3 className="text-lg font-semibold">{title}</h3>
      <section className="my-2 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        {/* Article for video */}
        <article className="myBorder relative flex h-[300px] w-full flex-col gap-4 rounded-lg text-white shadow-md hover:text-main md:h-[500px]">
          <div className="absolute bottom-3 right-3 z-10">
            <p className="flex items-center text-[18px] font-medium">
              <FaApple size={24} className="mr-1" />
              Music
            </p>
          </div>
          <video
            src={video}
            autoPlay
            loop
            muted
            preload="none"
            className="h-full w-full rounded-lg object-cover"
          ></video>
          <Link
            to={hrefVideo}
            className="absolute inset-0 z-10"
            aria-label="Watch video"
          ></Link>
        </article>
        {/* Article for image */}
        <LargeBanner image={image} hrefImg={hrefImg} />
      </section>
    </>
  );
}

export default MySpacialBanner;
