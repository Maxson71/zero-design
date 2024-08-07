import React from "react";
import HomeIcon from "../HomeIcon";

let homeIcons = {
    "data": [
        {
            "icon": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4d3e4bc25d3_13.svg",
            "title": "SMOOTH\nINTERACTIONS"
        },
        {
            "icon": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa428c0bc25de_16.svg",
            "title": "MANY\nPAGE LAYOUTS"
        },
        {
            "icon": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa435a7bc25da_14.svg",
            "title": "FULLY\nRESPONSIVE"
        },
        {
            "icon": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4102bbc25d6_20.svg",
            "title": "FAST\nCUSTOMIZATION"
        }
    ]
}

let videoSources = {
    "1": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa4fa1fbc2603_Pexels-Mart-Production-7767334-1-transcode.mp4",
    "2": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa46dd2bc2601_Production%20Id%205192068-1-transcode.mp4",
    "3": "https://assets-global.website-files.com/613f07ccd12aa4000cbc257a/613f07ccd12aa41353bc2602_Production%20Id%205192101-1-transcode.mp4"
}


const HomeSection = () => {
    return (
        <section id="home" className="home-block flex lg:flex-row flex-col items-center justify-between w-full pt-14 pb-2 gap-8">
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
                    {homeIcons.data.map((homeIcon, index) => (
                        <HomeIcon key={index} icon={homeIcon.icon} title={homeIcon.title} />
                    ))}
                </div>
            </div>
            <div className="video-collage gap-2 justify-center sm:flex hidden">
                {Object.values(videoSources).map((src, index) => (
                    <video
                        key={index}
                        className="video object-cover lg:h-home-image-height"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                ))}
            </div>
        </section>
    )
}

export default HomeSection;