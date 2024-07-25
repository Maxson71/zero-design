import React from "react";

type FrameProps = {
  title: string;
};

const Frame: React.FC<FrameProps> = (props) => {
  return (
    <div
      className="bg-foreground text-background py-3 pl-5 pr-8 
                    text-sm leading-tight text-center uppercase"
    >
      {props.title}
    </div>
  );
};

export default Frame;
