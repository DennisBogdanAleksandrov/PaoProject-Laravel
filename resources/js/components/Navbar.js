import React from 'react';
// import { Link } from 'react-router-dom';
import settingIcon from "../../images/settings.png";
import hamburgerMenu from './../../images/menu-symbol-of-three-parallel-lines.png';
import { StandardButton } from './buttons';


const Navbar = () => {
  return (
    <div className="sm:bg-black-transparent w-full z-50 fixed xl:static">
      <div className="container mx-auto xl:rounded-b">
        
        <div className="flex justify-between xl:hidden">
          <div className="h-12 w-12 m-4">
            <img src={settingIcon} alt="settings icon" />
          </div>
          <div className="h-12 w-12 m-4">
            <img src={hamburgerMenu} alt="menu icon" />
          </div>
        </div>

      </div>
    </div>
  );
};

const Navbar2 = () => {
   <div className="sm:bg-black-transparent w-full z-50 fixed xl:static">
      <div className="container mx-auto xl:rounded-b">
        <div className="hidden xl:flex justify-end">
        <StandardButton
          value="Settings"
          styleName="bg-blue-400 xl:m-2 border border-white text-white"
        />
        <StandardButton
          value="register"
          styleName="bg-white xl:mr-8 xl:m-2"
        />
      </div>
    </div>
  </div>
}

export default Navbar;

//{/* <Link to="/page1">Page1</Link> */}
//for images to work you'd import them and put it into jsx within a div and set wisth and height on that parent div.