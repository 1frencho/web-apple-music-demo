import { lazy, Suspense } from "react";

const MainBanner = lazy(() => import("../../sections/home/MainBanner"));
const MyActivity = lazy(() => import("../../sections/home/MyActivity"));
const MySpacialBanner = lazy(
  () => import("../../sections/home/MySpacialBanner"),
);

function Home() {
  return (
    <>
      <main className="p-6">
        <Suspense>
          <MainBanner />
          <MyActivity />
          <MySpacialBanner
            video="/assets/videos/kep1er_shooting_stars.mp4#t=132.0"
            title="Spacial Audio for you"
            image="/assets/artists/wooah.webp"
            hrefVideo="/artist/kep1er"
            hrefImg="/artist/wooah"
          />
        </Suspense>
      </main>
    </>
  );
}
export default Home;
