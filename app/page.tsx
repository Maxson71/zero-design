import { ThemeProvider } from "next-themes";
import Hotbar from "@/components/hotbar/Hotbar";
import HomeIcon from "@/components/home-page/HomeIcon";
import Frame from "@/components/Frame";
import TitleFrame from "@/components/TitleFrame";
import Card from "@/components/Card";

export default function Home() {
  let video_1 =
    "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4fa1fbc2603_Pexels-Mart-Production-7767334-1-transcode.mp4";
  let video_2 =
    "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa46dd2bc2601_Production%20Id%205192068-1-transcode.mp4";
  let video_3 =
    "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa41353bc2602_Production%20Id%205192101-1-transcode.mp4";

  return (
    <ThemeProvider>
      <Hotbar />
      <main
        className="main flex min-h-main-height flex-col 
                       items-center justify-between px-20 pb-0 
                       md:gap-16 xl:gap-20 2xl:gap-24 gap-12"
      >
        <div className="home-block flex items-center wrap justify-between w-full pt-14 pb-2 gap-8">
          <div className="info-block">
            <h1 className="title">
              A stylish UI Kit
              <br />
              <p className="leading-relaxed">for all web creatives</p>
            </h1>
            <p className="description text-2xl leading-relaxed text-default-700">
              Zero is a Webflow Ecommerce and CMS UI kit including several
              carefully designed page layouts.
            </p>

            <div className="home-icons flex flex-row justify-between">
              <HomeIcon
                icon={
                  "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4d3e4bc25d3_13.svg"
                }
                title={"SMOOTH\nINTERACTIONS"}
              />
              <HomeIcon
                icon={
                  "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa428c0bc25de_16.svg"
                }
                title={"MANY\nPAGE LAYOUTS"}
              />
              <HomeIcon
                icon={
                  "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa435a7bc25da_14.svg"
                }
                title={"FULLY\nRESPONSIVE"}
              />
              <HomeIcon
                icon={
                  "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4102bbc25d6_20.svg"
                }
                title={"FAST\nCUSTOMIZATION"}
              />
            </div>
          </div>
          <div className="video-collage flex gap-2 justify-center">
            <video
              className="video object-cover h-home-image-height"
              autoPlay
              loop
              muted
            >
              <source src={video_1} type="video/mp4" />
            </video>
            <video
              className="video object-cover h-home-image-height"
              autoPlay
              loop
              muted
            >
              <source src={video_2} type="video/mp4" />
            </video>
            <video
              className="video object-cover h-home-image-height"
              autoPlay
              loop
              muted
            >
              <source src={video_3} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="inline-flex max-w-none flex-row gap-12">
          <img
            src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa45664bc26d4_description2-p-1080.jpeg"
            alt="img"
            height={440}
            width={660}
          />
          <div className="flex-col gap-8">
            <h2 className="text-8xl">Zero Design</h2>
            <p className="text-xl mt-12">
              Includes a total of 10 static pages, divided like this: 4 Landing
              pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In
              addition to these, there are Webflow CMS driven pages: Blog (in 2
              variations), Shop (in 2 variations), Works and Careers. All with
              their respective single pages!
            </p>
            <div className="flex flex-row flex-wrap gap-2 mt-6 max-w-96">
              <Frame title="4 LANDING" />
              <Frame title="2 ABOUT" />
              <Frame title="3 CONTACT" />
              <Frame title="3 BLOG" />
              <Frame title="2 SHOP" />
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-2 max-w-96">
              <Frame title="WORKS" />
              <Frame title="TEAM" />
              <Frame title="CAREERS" />
              <Frame title="FORMS" />
              <Frame title="UTILITY" />
            </div>
          </div>
        </div>
        <div id="landing" className="flex w-full flex-col justify-start gap-8">
          <div className="flex">
            <TitleFrame title="LANDING PAGES" />
          </div>
          <div className="flex lg:flex-row flex-col flex-wrap gap-8">
            <Card
              title="Landing 1"
              src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa47c37bc2694_landing1.jpg"
            />
            <Card
              title="Landing 2"
              src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa47c37bc2694_landing1.jpg"
            />
            <Card
              title="Landing 3"
              src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa47c37bc2694_landing1.jpg"
            />
            <Card
              title="Landing 4"
              src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa47c37bc2694_landing1.jpg"
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
