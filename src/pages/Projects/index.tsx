import React, { useState } from 'react';
import { ProjectsGallery } from './components/ProjectsGallery';
import { useScreenType } from '../../hooks/useScreenType';
import SelectableItemList from '../../components/SelectableItemList';
import { Dialog } from '../../components/Dialog';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectCard } from './components/ProjectCard';
import { useGroup } from '../../hooks/useGroup';
import useFilter from '../../hooks/useFilter';
import { projectsMap } from './data';
import useURLParams from '../../hooks/useUrlParams';

const Projects: React.FC = () => {
  const [urlParams, setUrlParams] = useURLParams();
  const project = !!urlParams.projectId ? projectsMap.get(urlParams.projectId!) : undefined;
  const { isXs, isSm, isMd } = useScreenType();
  const [groups, initialGroupItem] = useGroup();
  const [filteredProjects, setFilter, filter] = useFilter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | undefined>();
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };
  const showProjectDetails = (projectId?: number) => { setUrlParams({ ...urlParams, projectId }) };

  return (
    <div className={(isXs || isSm || isMd) ? "flex flex-col relative" : "flex relative"} style={{ height: "calc(100vh - 60px)" }}>
      {(isXs || isSm || isMd) && <button type='button' className="self-end bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 m-4 rounded-md"
        onClick={toggleSidebar}>FLT</button>}
      <div className={(isXs || isSm || isMd) ? (
        isSidebarOpen === undefined ? "fixed top-0 z-10 w-[75%] bg-white transform translate-x-[-100%] h-screen pt-[60px] shadow-lg" : !isSidebarOpen ?
          `fixed top-0 z-10 w-[75%] bg-white transform translate-x-[-100%] duration-300 ease-in-out h-screen pt-[60px] shadow-lg` :
          `fixed top-0 z-10 w-[75%] bg-white transform translate-x-[0%] duration-300 ease-in-out h-screen overflow-auto pt-[60px] shadow-lg`) :
        "w-[25%] overflow-auto"}>
        <SelectableItemList groups={groups} onSelect={setFilter}
          initialSelectedItem={filter?.item ?? initialGroupItem.id} />
      </div>
      <div className={(isXs || isSm || isMd) ? "w-full overflow-auto" :
        "w-[75%] overflow-auto"}>
        <ProjectsGallery >
          {filteredProjects.map(project => (<ProjectCard key={project.id} project={project}
            defaultAction={() => { showProjectDetails(project.id) }} />))}
        </ProjectsGallery>
      </div>
      <Dialog isOpen={!!urlParams.projectId} onClose={() => showProjectDetails(undefined)}>
        {project ? <ProjectDetails {...project} /> : <></>}
      </Dialog>
    </div>
  );
};

export default Projects;