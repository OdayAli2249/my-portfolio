import React from 'react';
import BasicInfo from './components/BasicInfo';
import { basicInfo, services, skills, worksExperience } from './data';
import Timeline from './components/TimeLine';
import { Services } from './components/Services';
import Footer from './components/Footer';
import { Skills } from './components/Skills';


const Home: React.FC = () => {

  return (
    <div className={"flex flex-col relative overflow-auto"} style={{ height: "calc(100vh - 60px)" }}>
      <BasicInfo data={basicInfo} />
      <Timeline {...worksExperience} />
      <Skills {...skills} />
      <Services {...services} />
      <Footer />
    </div>
  );
};

export default Home;
