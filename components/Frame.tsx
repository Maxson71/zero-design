import React, { useState } from "react";
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
      className={`bg-foreground text-background py-3 pl-5 pr-8 
                  text-sm leading-tight text-center uppercase
                  transition-opacity duration-1000 ease-out
                  ${inView ? "opacity-100" : "opacity-0"}`}
    >
      {props.title}
    </div>
  );
};

export default Frame;
