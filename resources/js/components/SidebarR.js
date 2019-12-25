import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetSearch } from './Widgets';

const SidebarRight = () => {
  return (
    <div className="hidden xxl:block bg-blue-100 w-full sidebar">
      <WidgetSearch />
    </div>
  );
};

export default SidebarRight;