import React from 'react';
// import { Link } from 'react-router-dom';
import settingIcon from "../../images/settings.png";
import hamburgerMenu from './../../images/menu-symbol-of-three-parallel-lines.png';
import { StandardButton } from './buttons';
import SettingsWindow from './popup windows comps/SettingsWindow';


export class Navbar extends React.Component {

  handleClick () {
    console.log('success');
  }
  
  render () {
    return (
      <div className="relative z-10">
      <div className="bg-black-transparent xxl:hidden w-full z-50 fixed">
        <div className="container mx-auto xl:rounded-b">
          
          <div className="flex justify-between"> {/* //! onclick then element turns from hidden to block */}  
            <div className="h-12 w-12 m-4 hover:bg-blue-800 p-2" onClick={this.handleClick}>
              <img src={settingIcon} alt="settings icon" />
            </div>
            <div className="h-12 w-12 m-4 hover:bg-blue-800 p-2" onClick={this.handleClick}>
              <img src={hamburgerMenu} alt="menu icon" />
            </div>
          </div>

        </div>
      </div>
      
    </div>
    );
  }
};

export const Navbar2 = () => {
  return (
   <div className="linearGradientBlue2 lg:bg-black-transparent static">
      <div className="container mx-auto xl:rounded-b h-20">
        <div className="flex w-full h-full items-center justify-end">
        <img className="xl:hidden right-0" src={hamburgerMenu} width='50' height='50' alt="Menu icon"/>
        <div className="hidden xl:flex justify-end">
          <StandardButton
            value="Settings"
            styleName="bg-blue-400 border border-white text-white"
          />
          <StandardButton
            value="register"
            styleName="bg-white "
          />
        </div>
      </div>
    </div>
  </div>
  )
};

export default Navbar;

//{/* <Link to="/page1">Page1</Link> */}
//for images to work you'd import them and put it into jsx within a div and set wisth and height on that parent div.