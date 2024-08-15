import Logo from "@/components/logo/Logo";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const data = {
  sections: [
    {
      subsections: [
        {
          title: "Landing Pages",
          links: [
            { title: "Landing 1" },
            { title: "Landing 2" },
            { title: "Landing 3" },
            { title: "Landing 4" },
          ],
        },
        {
          title: "Company",
          links: [
            { title: "About 1" },
            { title: "About 2" },
            { title: "Contact 1" },
            { title: "Contact 2" },
            { title: "Contact 3" },
            { title: "Team" },
            { title: "FAQ" },
          ],
        },
      ],
    },
    {
      title: "CMS Pages",
      links: [
        { title: "Blog 1" },
        { title: "Blog 2" },
        { title: "Blog 3" },
        { title: "Single Product Page" },
        { title: "Shop 1" },
        { title: "Shop 2" },
        { title: "Single Post Page" },
        { title: "Careers" },
        { title: "Single Careers Page" },
        { title: "Works" },
        { title: "Single Work Page" },
      ],
    },
    {
      title: "Utility",
      links: [
        { title: "Coming Soon" },
        { title: "Password" },
        { title: "Privacy Policy" },
        { title: "Terms And Conditions" },
        { title: "404" },
        { title: "Licensing" },
        { title: "Style Guide" },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer z-10 top-0 flex gap-8 w-full items-start px-16 py-4 shadow-2xl bg-background">
      <div className="flex gap-8">
        {data.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-4">
            {section.subsections ? (
              section.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="flex flex-col gap-4">
                  <p className="text-2xl">{subsection.title}</p>
                  <div className='flex flex-col flex-wrap gap-3'>
                    {subsection.links.map((link, linkIndex) => (
                      <p key={linkIndex} className="text-base leading-tight text-gray-800">
                        {link.title}
                      </p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <>
                <p className="text-2xl">{section.title}</p>
                <div className='flex flex-col flex-wrap gap-3'>
                  {section.links.map((link, linkIndex) => (
                    <p key={linkIndex} className="text-base leading-tight text-gray-800">
                      {link.title}
                    </p>
                  ))}
                </div>
              </>

            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
