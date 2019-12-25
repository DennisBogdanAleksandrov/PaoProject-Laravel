import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CallToAction } from '../components/buttons';
import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';
import styled from "@emotion/styled";
import SidebarLeft from '../components/SidebarL';
import SidebarRight from '../components/SidebarR';
import Flashcard from '../components/Flashcard';



const FlashCardsP = () => { //! make an option to edit a card within flashcard mode. Make it so whe the screen is flippd the wording is flipped too; sidewys
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen bg-gray-300 sm:hidden">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="bg-white h-80vh w-80pec rounded shadow-lg">
            <span className="flex justify-center items-center h-full">Dennis Aleksandrov</span>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        
      <div className="container mx-auto">
        <div className="flex justify-center h-80vh">
          <div className="flex flex-col">
            <div className="h-32 w-32 mt-24 mb-20 mx-auto">
              <Logo />
            </div>
          </div> 
        </div>
      </div>

      <div className="xxl:px-0"> 
        <div className="h-24 lg:mx-12 xxl:mx-0 linearGradientBlue rounded-t-full"></div>
        <div className="flex lg:mx-12 xxl:mx-0 flex-col lg:bg-white">
          <div className="flex flex-col h-full lg:flex-row justify-center">
            <div className="hidden bg-blue-100 w-full sidebar xxl:block">
              <SidebarLeft />
            </div>
            <div className="h-full w-full">
              

              <Flashcard />

            </div>

            <SidebarRight />
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default FlashCardsP;