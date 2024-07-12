import { ThemeProvider } from "next-themes";
import Hotbar from "@/components/hotbar/Hotbar";

export default function Home() {
    let video_1 = "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4fa1fbc2603_Pexels-Mart-Production-7767334-1-transcode.mp4";
    let video_2 = "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa46dd2bc2601_Production%20Id%205192068-1-transcode.mp4";
    let video_3 = "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa41353bc2602_Production%20Id%205192101-1-transcode.mp4";
  return (
    <ThemeProvider>
      <Hotbar />
      <main className="main flex min-h-main-height flex-col items-center justify-between px-20 py-0">
          <div className="home-block flex items-center wrap-reverse justify-between w-full pt-16 pb-2 gap-8">
              <div className="info-block">
                  <h1 className="title">A stylish UI Kit
                      <br/>
                      <p className="leading-relaxed">for all web creatives</p>
                  </h1>
                  <p className="description text-2xl leading-relaxed text-default-700">Zero is a Webflow Ecommerce
                      and CMS UI kit including several carefully designed page layouts.</p>

              </div>
              <div className="video-collage flex gap-2 mr-4">
                  <video className='video w-1/3 object-cover h-home-image-height' autoPlay loop muted>
                      <source src={video_1} type='video/mp4'/>
                  </video>
                  <video className='video w-1/3 object-cover h-home-image-height' autoPlay loop muted>
                      <source src={video_2} type='video/mp4'/>
                  </video>
                  <video className='video w-1/3 object-cover h-home-image-height' autoPlay loop muted>
                      <source src={video_3} type='video/mp4'/>
                  </video>
              </div>
          </div>
      </main>
    </ThemeProvider>
  );
}
