import React from 'react';
import Logo from './../Logo';
import switchh from './../../../images/switch.png';
import { WidgetSearch, WidgetStudyOption } from './../Widgets';

const SettingsWindow = () => {
  return (
      <div className="z-20 absolute bg-black-transparent2 w-screen h-screen flex justify-center items-center">
        <div className="font-RockSalt font-normal bg-white w-3/4 rounded-xl shadow-lg relative">
          <span className="bg-gray-800 rounded-full w-8 h-8 absolute right-0 m-4"></span>  
            {/*//! popup settings window */}
          <div className="flex flex-col justify-center h-50vh justify-around mb-6">
            
            <div className="scaledown -mb-12 -mt-24">
              <Logo />
            </div>

            <div className="flex justify-center -my-12">
              <div className="flex items-center justify-center">
                <span>Person</span>
                <img className="rotateimg270" src={switchh} width='40' alt="switch logo"/>
              </div>
              
              <div className="flex items-center justify-center">
                <span>Action</span>
                <img className="rotateimg270" src={switchh} width='40' alt="switch logo"/>
              </div>

              <div className="flex items-center justify-center">
                <span>Object</span>
                <img className="rotateimg270" src={switchh} width='40' alt="switch logo"/>
              </div>
            </div>
            
            <WidgetSearch />

            <div className="flex justify-center">
              <WidgetStudyOption />
            </div>

            <button className="bg-gray-400 rounded-full w-64 mx-auto py-2 hover:opacity-75 hover:text-gray-700 font-semibold">Shuffle</button>
            <button className="bg-gray-400 rounded-full w-64 mx-auto py-2 hover:opacity-75 hover:text-gray-700 font-semibold">Edit Mode</button>
            <button className="bg-blue2-nice rounded-full w-32 mx-auto py-2 hover:opacity-75 font-semibold text-white">Done</button>
            
          </div>
        </div>
      </div>

  );
};

export default SettingsWindow;