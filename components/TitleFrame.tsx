import React from "react";

type TitleFrameProps = {
  title: string;
};

const TitleFrame: React.FC<TitleFrameProps> = (props) => {
  return (
    <div
      className="flex bg-foreground text-background py-2.5 pl-8 pr-24 
                 text-4xl leading-10 text-center uppercase"
    >
      {props.title}
    </div>
  );
};

export default TitleFrame;
