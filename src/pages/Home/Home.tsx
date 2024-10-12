import MainBanner from "../../sections/home/MainBanner";
import MyActivity from "../../sections/home/MyActivity";
import MyVideoBanner from "../../sections/home/MyVideoBanner";

function Home() {
  return (
    <>
      <main className="p-6">
        <MainBanner />
        <MyActivity />
        <MyVideoBanner video="/assets/videos/kep1er_shooting_stars.mp4" />
      </main>
    </>
  );
}
export default Home;
