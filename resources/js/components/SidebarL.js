import React from 'react';
import { Link } from 'react-router-dom';
import circle from './../../images/full-moon.png';
import checkCircle from './../../images/check.png';

const SidebarLeft = () => {
  return (/* //! hidden here */
        <div className="text-lg text-gray-800 flex lg:flex-col justify-around items-center w-full">

          
            <div className="flex lg:flex-col">
              <div className="flex items-center my-8 text-base">
                <div className="py-2 px-6 bg-blue-500 border border-blue-500">
                    Study all
                </div>
                <div className="py-2 px-6 bg-blue-200 border border-blue-500">
                  Study Stared
                </div>
              </div>
              
              <div className="flex items-center my-10">
                <span className="w-20 ml-4">Shuffle</span>
                <img src='./../../images/switch.png' className="ml-5 rotateimg270" width="40" height="40" alt="failed"/>
              </div>
            
              <div>
                <div className="mt-4">
                  <span className="text-gray-500 text-xl">Front of the card</span>

                  <div className="flex items-center mb-10 mt-6">
                      <span className="w-20 ml-4">Number</span>
                      <img src={circle} className="w-8 h-8 ml-5" alt="checkbox"/>
                  </div>
                
                  <div className="flex items-center my-10">
                      <span className="w-20 ml-4">Pao</span>
                      <img src={checkCircle} className='w-8 h-8 ml-5' alt="checkbox"/>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
  );
};

export default SidebarLeft;