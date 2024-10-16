import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ArtistCardProps {
  image: string;
  href: string;
  name?: string;
  className?: string;
}

export const ArtistCard = ({
  image,
  href,
  name,
  className,
}: ArtistCardProps) => {
  return (
    <div
      className={
        "myBorder relative flex h-[250px] w-full min-w-[250px] flex-col justify-end rounded-lg bg-cover bg-[center_70%] bg-no-repeat text-white shadow-md hover:text-main sm:w-[100%] md:w-[300px] md:min-w-[300px]" +
        className
      }
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-end p-4">
        <p className="flex items-center text-[18px] font-medium">
          <FaApple size={24} className="mr-1" />
          {name}
        </p>
      </div>
      <Link
        to={href}
        className="absolute inset-0 z-10"
        aria-label={name}
      ></Link>
    </div>
  );
};
