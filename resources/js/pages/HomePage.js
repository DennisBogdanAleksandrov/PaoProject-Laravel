import React from 'react';
import Navbar from '../components/Navbar';
import { CallToAction } from '../components/buttons';
import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';
import styled from "@emotion/styled";
import SidebarRight from '../components/SidebarR';
import SidebarLeft from '../components/SidebarL';



const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-center h-80vh">
          <div className="flex flex-col">
            <Logo />
            <CallToAction /> 
          </div> 
        </div>
      </div>

      <div className="md:px-24 xxl:px-0"> 
        <div className="hidden lg:block h-24 linearGradientBlue rounded-t-full"></div>
        <div className="flex flex-col lg:bg-white">
          <div className="lg:flex justify-center">
            <div className="hidden bg-blue-100 w-full sidebar xxl:block">
              <SidebarLeft />
            </div>
            <div className="xxl:px-24">
              <PaoTable /> 
            </div>
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;