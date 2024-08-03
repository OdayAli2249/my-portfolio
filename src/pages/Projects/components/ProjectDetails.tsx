import React from "react";
import { Project, ProjectHeaderProps } from "../interfaces";
import { ProjectHeader } from "./ProjectHeader";
import Gallery from "../../../components/Gallery";
import { ItemList } from "../../../components/ItemList";
import { LinkList } from "../../../components/LinkList";
import useURLParams from "../../../hooks/useUrlParams";
import { Item } from "../../../components/ItemList/interfaces";

export const ProjectDetails: React.FC<Project> = ({
  name,
  logoUrl,
  description,
  aboutItems,
  aboutTitle,
  links,
  linksTitle,
  gallery,
  customComponent,
}) => {
  const [urlParams, _] = useURLParams();
  const itemListComparator = (a: Item, b: Item) =>
    !!urlParams.tag && a.tag === urlParams.tag
      ? -1
      : !!urlParams.tag && b.tag === urlParams.tag
      ? 1
      : 0;

  return (
    <div className="w-full h-[80vh] overflow-auto">
      <div
        className={
          "flex flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-row gap-8"
        }
      >
        <div
          className={
            "w-full  xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col"
          }
        >
          <ProjectHeader
            projectName={name}
            logoUrl={logoUrl}
            subtitle={description}
          />
          <div
            className={
              "w-full flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-8"
            }
          >
            {!customComponent && (
              <div
                className={
                  "w-full xs:w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3"
                }
              >
                <ItemList
                  title={aboutTitle || ""}
                  items={aboutItems || []}
                  comparator={itemListComparator}
                />
              </div>
            )}
            {!customComponent && (
              <div
                className={
                  "w-full xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3"
                }
              >
                <LinkList title={linksTitle || ""} items={links || []} />
              </div>
            )}
            {customComponent ?? <></>}
          </div>
        </div>
        <div className={"w-full  xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2"}>
          <Gallery items={gallery || []} />
        </div>
      </div>
    </div>
  );
};
