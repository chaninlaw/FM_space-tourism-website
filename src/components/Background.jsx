import HomeMobileBg from "../assets/home/background-home-mobile.jpg";
import HomeTabletBg from "../assets/home/background-home-tablet.jpg";
import HomeDesktopBg from "../assets/home/background-home-desktop.jpg";
import DestMobileBg from "../assets/destination/background-destination-mobile.jpg";
import DestTabletBg from "../assets/destination/background-destination-tablet.jpg";
import DestDesktopBg from "../assets/destination/background-destination-desktop.jpg";
import CrewMobileBg from "../assets/crew/background-crew-mobile.jpg";
import CrewTabletBg from "../assets/crew/background-crew-tablet.jpg";
import CrewDesktopBg from "../assets/crew/background-crew-desktop.jpg";
import TechMobileBg from "../assets/technology/background-technology-mobile.jpg";
import TechTabletBg from "../assets/technology/background-technology-tablet.jpg";
import TechDesktopBg from "../assets/technology/background-technology-desktop.jpg";

const BgObj = {
  home: {
    mobileBg: HomeMobileBg,
    tabletBg: HomeTabletBg,
    desktopBg: HomeDesktopBg,
  },
  destination: {
    mobileBg: DestMobileBg,
    tabletBg: DestTabletBg,
    desktopBg: DestDesktopBg,
  },
  crew: {
    mobileBg: CrewMobileBg,
    tabletBg: CrewTabletBg,
    desktopBg: CrewDesktopBg,
  },
  technology: {
    mobileBg: TechMobileBg,
    tabletBg: TechTabletBg,
    desktopBg: TechDesktopBg,
  },
};

const Background = ({ children, title }) => {
  const currPage = BgObj[title];

  return (
    <section>
      <div
        style={{
          "--image-mobile": `url(${currPage.mobileBg})`,
          "--image-tablet": `url(${currPage.tabletBg})`,
          "--image-desktop": `url(${currPage.desktopBg})`,
        }}
        className={`
      absolute inset-x-0 top-0 isolate -z-10 min-h-screen w-screen
     bg-black bg-opacity-0 bg-cover bg-fixed bg-top bg-blend-screen 
      after:absolute after:inset-0 after:-z-[11] after:bg-black
      after:bg-[image:var(--image-mobile)]
      after:bg-cover after:opacity-100
      after:transition-opacity
      after:md:bg-[image:var(--image-tablet)]
      after:lg:bg-[image:var(--image-desktop)]
  `}
      >
        {children}
      </div>
    </section>
  );
};

export default Background;
