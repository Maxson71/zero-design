import React from "react";
import Image from "next/image";

type HomeIconProps = {
    icon: string;
    title: string;
};

const HomeIcon: React.FC<HomeIconProps> = (props) => {
    return (
        <div className="home-icon flex flex-col items-center mt-10 gap-5 ease-in-out duration-300">
            <div className="icon flex items-center justify-center rounded-full w-16 h-16 ease-in-out duration-300">
                <Image src={props.icon} alt="icon" className="w-16 h-16" height={64} width={64} />
            </div>
            <div className="icon-info ">
                <h3 className="title whitespace-pre-line text-xs leading-none text-center text-default-800 uppercase">
                    {props.title}
                </h3>
            </div>
        </div>
    )
}

export default HomeIcon;