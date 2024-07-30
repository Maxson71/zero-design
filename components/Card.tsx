import React from "react";

type CardProps = {
  title: string;
  src: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex-col bg-background text-foreground p-8 space-y-6 justify-start cursor-pointer duration-500 hover:bg-warning hover:-translate-y-3">
      <img className="" src={props.src} alt={props.title} />
      <div className="flex text-2xl leading-none text-center uppercase ">
        {props.title}
      </div>
    </div>
  );
};

export default Card;
