import { ThemeProvider } from "next-themes";
import Hotbar from "@/components/hotbar/Hotbar";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider>
      <Hotbar />
      <main className="flex min-h-main-height flex-col items-center justify-between px-20 py-0">
          <div className="flex flex-row items-center justify-between w-full pt-16 pb-2 gap-8 grid-cols-2">
              <div className="max-w-45rem">
                  <h1 className=" ">A stylish UI Kit
                      <br/>
                      <p className="leading-relaxed">for all web creatives</p>
                  </h1>
                  <p className="text-2xl leading-relaxed text-default-700">Zero is a Webflow Ecommerce
                      and CMS UI kit including several carefully designed page layouts.</p>

              </div>
              <div className="flex gap-2 portrait:hidden">
                  <Image src="/image/image1.jpg" alt="Image1" width={160} height={384} className="object-cover h-main-height"/>
                  <Image src="/image/image2.jpg" alt="Image2" width={160} height={384} className="object-cover h-main-height"/>
                  <Image src="/image/image3.jpg" alt="Image3" width={160} height={384} className="object-cover h-main-height"/>
              </div>
          </div>
      </main>
    </ThemeProvider>
  );
}
