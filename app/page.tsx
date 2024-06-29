import { ThemeProvider } from "next-themes";
import Hotbar from "@/components/hotbar/Hotbar";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider>
      <Hotbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
          <div className="flex items-center justify-between py-0">
              <div className="max-w-38rem">
                  <p className="text-8xl ">A stylish UI Kit</p>
                  <p className="text-5xl leading-relaxed">for all web creatives</p>
                  <p className="text-2xl leading-relaxed text-default-700">Zero is a Webflow Ecommerce
                      and CMS UI kit including several carefully designed page layouts.</p>

              </div>
              <div className="flex gap-4 portrait:hidden">
                  <Image src="/image/image1.jpg" alt="Image1" width={160} height={384} className="object-cover h-96 w-40 hidden lg:block"/>
                  <Image src="/image/image2.jpg" alt="Image2" width={160} height={384} className="object-cover h-96 w-40 hidden xl:block"/>
                  <Image src="/image/image3.jpg" alt="Image3" width={160} height={384} className="object-cover h-96 w-40 hidden 2xl:block"/>
              </div>
          </div>
      </main>
    </ThemeProvider>
  );
}
