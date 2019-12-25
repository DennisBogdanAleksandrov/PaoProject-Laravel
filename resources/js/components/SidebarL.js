import React from 'react';
import WidgetShuffle, { WidgetOrderOption, WidgetStudyOption, WidgetSearch } from './Widgets';

const SidebarLeft = () => {
  return (/* //! hidden here */
        <div className="text-lg text-gray-800 flex lg:flex-col justify-around items-center w-full">

          
            <div className="flex lg:flex-col w-full justify-around items-center">
              <div className="self-center hidden lg:block xxl:hidden">
                <WidgetSearch />
              </div>
              
              <WidgetStudyOption />
              <WidgetShuffle />

              <div>
                <WidgetOrderOption />
              </div>
            </div>
            
        </div>
  );
};

export default SidebarLeft;