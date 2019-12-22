import React from 'react';
// import { Link } from 'react-router-dom';
import settingIcon from "../../images/settings.png";
import hamburgerMenu from './../../images/menu-symbol-of-three-parallel-lines.png';
import { StandardButton } from './buttons';


const Navbar = () => {
  return (
    <div className="bg-black-transparent">
      <div className="container mx-auto">
        
        <div className="flex justify-between lg:hidden">
          <div className="h-12 w-12 m-4">
            <img src={settingIcon} alt="settings icon"/>
          </div>
          <div className="h-12 w-12 m-4">
            <img src={hamburgerMenu} alt="menu icon"/>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <StandardButton value="Settings" styleName="bg-blue-400 border border-white text-white" />
          <StandardButton value="register" styleName="bg-white" />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;

//{/* <Link to="/page1">Page1</Link> */}
//for images to work you'd import them and put it into jsx within a div and set wisth and height on that parent div.