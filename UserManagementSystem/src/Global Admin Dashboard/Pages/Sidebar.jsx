// src/components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded"
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4">
          <ul>
            <li className="p-2 hover:bg-gray-200"><a href="#page1">Page 1</a></li>
            <li className="p-2 hover:bg-gray-200"><a href="#page2">Page 2</a></li>
            <li className="p-2 hover:bg-gray-200"><a href="#page3">Page 3</a></li>
            <li className="p-2 hover:bg-gray-200"><a href="#page4">Page 4</a></li>
            <li className="p-2 hover:bg-gray-200"><a href="#page5">Page 5</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
