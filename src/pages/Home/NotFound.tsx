import { SiApplemusic } from "react-icons/si";

function NotFound() {
  return (
    <>
      <section className="flex h-[80vh] flex-col items-center justify-center gap-2">
        <SiApplemusic size={62} className="text-main" />
        <h2 className="text-4xl font-medium">404</h2>
        <p className="text-xl">Page not found</p>
      </section>
    </>
  );
}
export default NotFound;
