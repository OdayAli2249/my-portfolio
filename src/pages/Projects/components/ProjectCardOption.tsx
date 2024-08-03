import React from "react";
import { ProjectCardOptionProps } from "../interfaces";

export const ProjectsCardOption: React.FC<ProjectCardOptionProps> = ({
  option,
  defaultAction,
}) => {
  if (option.actionType === "LINK")
    return (
      <a
        href={option.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-sm"
      >
        <img className="w-4 h-4 mr-1" src={option.icon} alt="Button Icon" />
        <>{option.label}</>
      </a>
    );
  else
    return (
      <button
        type="button"
        onClick={() => defaultAction()}
        className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-sm"
      >
        <img className="w-4 h-4 mr-1" src={option.icon} alt="Button Icon" />
        <>{option.label}</>
      </button>
    );
};
