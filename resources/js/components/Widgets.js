import React from 'react';
import circle from './../../images/full-moon.png';
import checkCircle from './../../images/check.png';
import { Link } from 'react-router-dom';

const WidgetShuffle = () => {
  return (
    <div className="flex items-center my-10">
      <span className="w-20 ml-4">Shuffle</span>
      <img src='./../../images/switch.png' className="ml-5 rotateimg270" width="40" height="40" alt="failed"/>
    </div>
  );
};

export const WidgetStudyOption = () => {
  return (
    <div className="flex items-center my-8 text-base">
      <div className="py-2 px-6 bg-blue-500 border border-blue-500">
          Study all
      </div>
      <div className="py-2 px-6 bg-blue-200 border border-blue-500">
        Study Stared
      </div>
    </div>
  );
};

export const WidgetOrderOption = () => {
  return (
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
  );
};

export const WidgetSearch = () => {
  return (
    <div className="flex flex-col w-full">
        <div className="ml-12 mb-10">

          <div className="flex self-center pt-12">
            <p>Search </p>
            <img src="./../../images/magnifying-glass-finder.png" alt=""/>
            <input className="border-b border-gray-800 bg-blue-100" type="textarea"/>
          </div>

        </div>
        <div className="flex flex-col">
        
        <Link to="flashcards" className="h-10 ml-12 my-1 hover:opacity-50 w-40">flashcard mode
          <div className="w-10 border-b border-blue-800 absolute w-32"></div>
        </Link>

        <Link to="/home" className="h-10 ml-12 my-1 hover:opacity-50 w-40">account settings
          <div className="w-10 border-b border-green-300 absolute w-32"></div>
        </Link>

        </div>
      </div>

  )
}

export default WidgetShuffle;