import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import backgroundImg from './../../images/jfl-GfmIT_pseDQ-unsplash.jpg';
import { CallToAction } from '../components/buttons';
import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';




const divStyling = {
  backgroundImage: "url(" + backgroundImg + ")",
  backgroundPosition: '',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const Home = () => {
  return (
    <div style={divStyling} className="h-screen"> 
      <Navbar />

    {/* front screen */}
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col h-screen">

        <div className="h-32 w-32 mt-24 mb-20 mx-auto">
          <Logo />
        </div>

            <CallToAction />
          </div>
        </div>
        <div className="flex justify-center -mt-12">
          <PaoTable />
        </div>
      </div>
      {/* the sets */}
    </div>
  );
};

export default Home;

//background doesn't look good on desktop view. Blur it and add a dark filter over it

//don't forget to change your password on all accounts after this