import React, { useState } from "react";
import { ProjectCardProps } from "../interfaces";
import { ProjectsCardOption } from "./ProjectCardOption";
import MediaViewer from "../../../components/MediaViewer";
import { ProjectHeader } from "./ProjectHeader";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  defaultAction,
}) => {
  const [maximized, setMaximized] = useState(false);
  const handleClick = (event: any) => {
    event.stopPropagation();
    setMaximized(!maximized);
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[310px] relative">
      {project.type === "video" ? (
        <div onClick={handleClick}>
          <MediaViewer {...project.mediaViewer!} />
        </div>
      ) : (
        <img
          className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
          src={project.mediaUrl}
          alt="Card Media"
          onClick={handleClick}
        />
      )}
      <div className="flex flex-row">
        <div className="m-4">
          <img
            src={project.logoUrl}
            alt="Project Logo"
            width={42}
            height={42}
            className="rounded-md object-contain"
          />
        </div>
        <div className="self-center">
          <h1 className="flex text-md xs:text-md sm:text-lg md:text-lg lg:text-xl font-bold">
            {project.name}
          </h1>
          <p className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md text-gray-500">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-1 flex justify-center absolute bottom-0 left-2">
        {project.options.map((option, index) => (
          <ProjectsCardOption
            key={index}
            option={option}
            defaultAction={defaultAction}
          />
        ))}
      </div>
      {maximized && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleClick}
        >
          {project.type === "image" ? (
            <img
              src={project.mediaUrl}
              alt="Maximized Image"
              className="max-h-full max-w-full"
            />
          ) : (
            <video
              className="w-[60%] h-[90%] object-contain"
              autoPlay
              loop
              muted
            >
              <source src={project.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};
