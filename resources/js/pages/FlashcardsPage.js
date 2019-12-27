import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CallToAction } from '../components/buttons';
import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';
import styled from "@emotion/styled";
import SidebarLeft from '../components/SidebarL';
import SidebarRight from '../components/SidebarR';
import Flashcard, { FlashcardPhoneScreen } from '../components/Flashcard';
import SettingsWindow from '../components/popup windows comps/SettingsWindow';
import MenuWindow from '../components/popup windows comps/MenuWindow';



export class FlashCardsP extends Component { //! make an option to edit a card within flashcard mode. Make it so whe the screen is flippd the wording is flipped too; sidewys
  constructor(props) {
    super(props);
    this.handlingC = this.handlingC.bind(this);
  }

  state = {
    on: false, 
  }

  handleClick = () => {
    this.setState({
      on: !this.state.on
    })
  }//? telling it to set state oposite of on.

  handlingC (test) {
    console.log(test);
  }

  render () {
    return (
      <div className="relative">
      <div className="hidden" id="settingWindow">
        <SettingsWindow />
      </div>
      <div className="hidden" id="menuWindow">
        <MenuWindow />
      </div>
      <Navbar stateValue="123" handleClick={this.handlingC}  /> {/* //!!!!!Here */}
      <div className="sm:hidden">
        <FlashcardPhoneScreen />
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
          <div className="h-24 lg:mx-12 xxl:mx-0 linearGradientBlue2 rounded-t-full"></div>
          <div className="flex lg:mx-12 xxl:mx-0 flex-col lg:bg-white">
            <div className="flex flex-col h-full lg:flex-row justify-center">
              <div className="bg-blue-100 w-full xxl:block">
                <SidebarLeft />
              </div>
              <div className="h-full w-full">
                

                <Flashcard />

              </div>

              <SidebarRight />
            </div>
 

          </div>
      <div className="h-24 lg:mx-12 xxl:mx-0 linearGradientBlue2 rounded-b-full"></div>
        </div>
    </div>
  </div>
  );
  }
};

export default FlashCardsP;