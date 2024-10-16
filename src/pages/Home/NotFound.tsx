import { SiApplemusic } from "react-icons/si";
import { Link } from "react-router-dom";

function NotFound({ message = "Page not found" }: { message?: string }) {
  return (
    <>
      <section className="flex h-[80vh] flex-col items-center justify-center gap-4">
        <SiApplemusic size={62} className="text-main" />
        <h2 className="text-2xl font-medium">{message}</h2>
        <Link to={"/"} className="myPrimaryBtn">
          <p>Go to Home</p>
        </Link>
      </section>
    </>
  );
}
export default NotFound;
