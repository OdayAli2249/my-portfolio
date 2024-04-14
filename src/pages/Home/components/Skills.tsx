import React from "react";
import { Carousel } from "../../../components/Carousel";
import { SkillsProps } from "../interfaces";

export const Skills: React.FC<SkillsProps> = ({
  title,
  subtitle,
  carousel,
}) => {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-2 xs:px-2 sm:px-4 md:px-8 lg:px-24">
      <h1 className="text-md xs:text-md md:text-lg lg:text-2xl font-bold text-blue-500 !leading-relaxed py-8 xs:py-8 sm:py-12 md:py-16 lg:py-16" >
        {title}
      </h1>
      <p className="text-xs xs:text-xs md:text-sm lg:text-md text-gray-500 text-center mb-4 px-4 xs:px-4 md:px-[5.5rem]">
        {subtitle}
      </p>
      <Carousel title={carousel.title} items={carousel.items} />
    </div>
  );
};
