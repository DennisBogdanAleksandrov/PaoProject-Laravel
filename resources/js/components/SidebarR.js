import React from 'react';
import { Link } from 'react-router-dom';

const SidebarRight = () => {
  return (
    <div className="hidden xxl:block bg-blue-100 w-full sidebar">
      <div className="flex flex-col w-full">
        <div className="flex self-center pt-12 pb-24">
          <p>Search </p>
          <img src="./../../images/magnifying-glass-finder.png" alt=""/>
          <input className="border-b border-gray-800 bg-blue-100" type="textarea"/>
        </div>
        <div className="flex flex-col">
        
        <Link to="flashcards" className="h-10 ml-12 my-1 hover:opacity-50 w-32">flashcard mode
          <div className="w-10 border-b border-blue-800 absolute w-32"></div>
        </Link>

        <Link to="/home" className="h-10 ml-12 my-1 hover:opacity-50 w-32">account settings
          <div className="w-10 border-b border-green-300 absolute w-32"></div>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default SidebarRight;