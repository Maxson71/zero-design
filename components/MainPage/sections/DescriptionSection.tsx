import React from "react";
import Frame from "@/components/Frame";

let blocks = {
    "block_1": [
        { "title": "4 LANDING" },
        { "title": "2 ABOUT" },
        { "title": "3 CONTACT" },
        { "title": "3 BLOG" },
        { "title": "2 SHOP" }
    ],
    "block_2": [
        { "title": "WORKS" },
        { "title": "TEAM" },
        { "title": "CAREERS" },
        { "title": "FORMS" },
        { "title": "UTILITY" }
    ]
}

const DecriptionSection = () => {
    return (
        <section id="description" className="inline-flex max-w-none flex-row gap-12">
            <img
                className="object-cover"
                src="https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa45664bc26d4_description2-p-1080.jpeg"
                alt="description2"
                height={440}
                width={660}
            />
            <div className="flex-col gap-8">
                <h2 className="text-8xl">Zero Design</h2>
                <p className="text-xl mt-12 mb-4">
                    Includes a total of 10 static pages, divided like this: 4 Landing
                    pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In
                    addition to these, there are Webflow CMS driven pages: Blog (in 2
                    variations), Shop (in 2 variations), Works and Careers. All with
                    their respective single pages!
                </p>

                {Object.keys(blocks).map((block, blockIndex) => (
                    <div key={blockIndex} className="flex flex-row flex-wrap gap-2 mt-2 max-w-96">
                        {blocks[block as keyof typeof blocks].map((item, itemIndex) => (
                            <Frame key={itemIndex} title={item.title} />
                        ))}
                    </div>
                ))}

            </div>
        </section>
    )

}

export default DecriptionSection;