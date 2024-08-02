"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

type FrameProps = {
  title: string;
};

const Frame: React.FC<FrameProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-foreground text-background py-3 pl-5 pr-8 duration-500 transform transition-all
                  text-sm leading-tight text-center uppercase
                  ${inView
          ? "opacity-100 translate-y-0 rotate-0"
          : "opacity-0 translate-y-10 rotate-6"
        }`}
    >
      {props.title}
    </div>
  );
};

export default Frame;
