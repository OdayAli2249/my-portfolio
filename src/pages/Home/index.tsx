import React from 'react';
import BasicInfo from './components/BasicInfo';
import { basicInfo, events } from './data';
import Timeline from './components/TimeLine';


const Home: React.FC = () => {

  return (
    <div className={"flex flex-col relative overflow-auto"} style={{ height: "calc(100vh - 60px)" }}>
      <BasicInfo data={basicInfo} />
      <Timeline events={events} />
    </div>
  );
};

export default Home;
