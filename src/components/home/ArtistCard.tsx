import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ArtistCardProps {
  image: string;
  href: string;
  name?: string;
}

export const ArtistCard = ({ image, href, name }: ArtistCardProps) => {
  return (
    <Link to={href}>
      <div
        className="myBorder flex h-[250px] w-[300px] flex-col justify-end rounded-lg bg-cover bg-[center_70%] shadow-md"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-end p-4 text-white">
          <p className="flex items-center text-[18px] font-medium">
            <FaApple size={24} className="mr-1" />
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};
