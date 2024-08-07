
import Frame from "@/components/Frame";
import TitleFrame from "@/components/TitleFrame";
import Card from "@/components/Card";
import ImageComponent from "@/components/ImageComponent";
import HomeSection from "@/components/MainPage/sections/HomeSection";
import DecriptionSection from "../components/MainPage/sections/DescriptionSection";

export default function Home() {

  const data = {
    sections: [
      {
        id: "landing",
        title: "LANDING PAGES",
        cards: [
          {
            title: "Landing 1",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa47c37bc2694_landing1.jpg"
          },
          {
            title: "Landing 2",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4d979bc2695_landing2.jpg"
          },
          {
            title: "Landing 3",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa48b26bc2696_landing3.jpg"
          },
          {
            title: "Landing 4",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4986fbc2697_landing4.jpg"
          }
        ]
      },
      {
        id: "company",
        title: "COMPANY",
        miniCards: [
          {
            title: "About 1",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa42f5cbc2698_about1.jpg"
          },
          {
            title: "About 2",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa45369bc2699_about2.jpg"
          },
          {
            title: "Contact 1",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4f5c3bc269a_contact1.jpg"
          },
          {
            title: "Contact 2",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4c18fbc269b_contact2.jpg"
          },
          {
            title: "Contact 3",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/614b42af1e085a4e9324801b_contact3.jpg"
          },
          {
            title: "Team",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4a245bc269c_team.jpg"
          },
          {
            title: "FAQ",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4fae9bc26b0_faq.jpg"
          }
        ]
      },
      {
        id: "cms_pages",
        title: "CMS Pages",
        cards: [
          {
            title: "Works",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa42b9abc26af_work.jpg"
          },
          {
            title: "Blog 1",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4f239bc26ac_blog1.jpg"
          },
          {
            title: "Blog 2",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa470a3bc26a3_blog2.jpg"
          },
          {
            title: "Blog 3",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/614b42dfaf7ec5e11ec9348b_blog3.jpg"
          },
          {
            title: "Shop 1",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4550ebc26a4_shop1.jpg"
          },
          {
            title: "Shop 2",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4d97ebc26a5_shop2.jpg"
          },
          {
            title: "careers",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa436aabc26a8_crrers.jpg"
          },
          {
            title: "Single product page",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa49835bc26a6_singleproduct.jpg"
          },
          {
            title: "Single post page",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4663ebc26a7_singlepost.jpg"
          },
          {
            title: "Single careers page",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4fde9bc26ad_singlecareers.jpg"
          },
          {
            title: "Single work page",
            src: "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4d477bc26a2_singlework.jpg"
          }
        ]
      }
    ]
  };

  return (
    <main
      className="main flex min-h-main-height flex-col 
                 items-center justify-between px-20 pb-0 
                 md:gap-16 xl:gap-20 2xl:gap-24 gap-12"
    >
      <HomeSection />
      <DecriptionSection />

      {data.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} id={section.id} className="flex w-full flex-col justify-start gap-8">
          <div className="flex">
            <TitleFrame title={section.title} />
          </div>
          <div className={`${section.miniCards ? 'mini-cards md:flex-row' : 'cards lg:flex-row'} flex flex-col flex-wrap gap-8`}>
            {(section.cards || section.miniCards).map((card, cardIndex) => (
              <Card key={cardIndex} title={card.title} src={card.src} />
            ))}
          </div>
        </section>
      ))}

    </main>
  );
}
