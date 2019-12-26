import React from 'react';
import { Navbar2 } from '../components/Navbar';
import CatImg from './../../images/mycat.jpg';
import gear from './../../images/gear-option.png';
import Logo from '../components/Logo';

const SettingsP = () => { /* //! all I got to do ere is change the of the images, set the blue slanted background/div and make it responsive. */
  return (
    <div className="backgroundImgSettings h-screen">
      <Navbar2 />
      <div className="flex flex-col justify-around items-center">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col">
            <span>Username</span>
            <span>Pao systems</span>
            <span>Email</span>
          </div>
          <div className="">
            <img src={CatImg} width={50} hight={50} alt="cat wiskers"/> {/* //! failed to contain the image. Thr creator of tailwind has a tutorial on how to use image positioning classes. Watch them. */}
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <div classNmae="w-24 h-24 ">
            <img src={gear} width={50} hight={50} alt="Image of a gear"/>
          </div>
          <div className="flex flex-col">
            <span>Change wallpaper</span>
            <span>Change password</span>
            <span>Change username</span>
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <div>
            <span>Contacts</span>
          </div>
          <div>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsP;