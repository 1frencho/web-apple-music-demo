import { Link } from "react-router-dom";

interface MyVideoCardProps {
  video: string;
  href: string;
  shortMessage?: string;
}
export const MyVideoCard = ({
  href,
  video,
  shortMessage,
}: MyVideoCardProps) => {
  return (
    <>
      <article className="inline-block">
        <h4 className="mb-2 text-sm text-slate-400">{shortMessage}</h4>
        <Link to={href}>
          <div className="myBorder relative flex h-[250px] w-[300px] flex-col gap-4 rounded-lg shadow-md">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="h-full w-full rounded-lg object-cover"
            ></video>
            <div className="absolute inset-0 z-10"></div>
          </div>
        </Link>
      </article>
    </>
  );
};
