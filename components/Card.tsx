"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent"

type CardProps = {
  title: string;
  src: string;
};

const Card: React.FC<CardProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex-col bg-background text-foreground p-8 space-y-6 justify-start cursor-pointer duration-500 transform transition-all 
      ${inView
          ? "opacity-100 translate-y-0 rotate-0"
          : "opacity-0 translate-y-10 rotate-6"
        } 
      hover:bg-warning hover:-translate-y-3`}
    >
      <ImageComponent
        src={props.src}
        alt="card_image"
        width={450}
        height={350}
      />
      <div className="flex text-2xl leading-none text-center uppercase ">
        {props.title}
      </div>
    </div>
  );
};

export default Card;
