import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
interface LargeBannerProps {
  image: string;
  hrefImg: string;
}
export const LargeBanner = ({ image, hrefImg }: LargeBannerProps) => {
  return (
    <>
      <article
        className="myBorder relative flex h-[300px] w-full flex-col gap-4 rounded-lg bg-cover bg-[center_40%] bg-no-repeat text-white shadow-md hover:text-main md:h-[500px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute bottom-3 right-3 z-10">
          <p className="flex items-center text-[18px] font-medium">
            <FaApple size={24} className="mr-1" />
            Music
          </p>
        </div>
        <Link
          to={hrefImg}
          className="absolute inset-0 z-10"
          aria-label="View image"
        ></Link>
      </article>
    </>
  );
};
