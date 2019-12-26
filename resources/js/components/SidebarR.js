import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetSearch } from './Widgets';

const SidebarRight = () => {
  return (
        <div className="hidden xxl:block bg-blue-100 w-full sidebar">
    <div className="flex flex-col w-full">
      <div className="ml-12 mb-10">

          <WidgetSearch />
        <div className="flex flex-col">
          
          <Link to="flashcards" className="h-10 ml-12 my-1 hover:opacity-50 w-40 mt-10">flashcard mode
            <div className="w-10 border-b border-blue-800 absolute w-32"></div>
          </Link>

          <Link to="/home" className="h-10 ml-12 my-1 hover:opacity-50 w-40">account settings
            <div className="w-10 border-b border-green-300 absolute w-32"></div>
          </Link>
        </div>

        </div>
      </div>

    </div>
  );
};

export default SidebarRight;