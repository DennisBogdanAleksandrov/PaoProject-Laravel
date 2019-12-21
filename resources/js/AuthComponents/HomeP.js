import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import backgroundImg from './../../images/jfl-GfmIT_pseDQ-unsplash.jpg';
import LogoImg from './../../images/playing-cards-png-11-transparent.png';

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
          <div className="flex flex-col">

          <div className="h-16 w-16 py-24 mx-auto">
            <img src={LogoImg} className="" alt="Logo image"/>
          </div>
          
          {/* go to flashcard call to action */}
          <div className="bg-blue-600 px-8 py-2 rounded-lg">
            <p className="text-gray-200">Go to flashcards</p>
            <div className="flex flex-row justify-between">
              <div className="w-8 h-12 bg-white rounded"></div>
              <div className="w-8 h-12 bg-white rounded"></div>
              <div className="w-8 h-12 bg-white rounded"></div>
            </div>
          </div>
          </div>
        </div>
          

      </div>

      {/* the sets */}
    </div>
  );
};

export default Home;

//background doesn't look good on desktop view. Blur it and add a dark filter over it

//don't forget to change your password on all accounts after this