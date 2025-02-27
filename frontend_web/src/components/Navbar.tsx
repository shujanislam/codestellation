import React, { useState, useEffect } from "react";


export default function Navbar({ toggleSidebar }) {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() =>{
    const fetchName = () =>{
      const storedName = localStorage.getItem('name');
      setName(storedName);
    }

    fetchName();
  }, [])

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 p-2 rounded hover:bg-blue-700"
          >
            ☰
          </button>
          <a href="#" className="text-xl font-bold">{ name }</a>
        </div>
        
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        
        <ul
          className={`md:flex space-x-4 absolute md:static bg-blue-600 md:bg-transparent w-full left-0 md:w-auto md:flex-row flex-col md:items-center items-start p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-200px]"
          }`}
        >
          <li><a href="/" className="block py-2 px-4 hover:bg-blue-700 rounded">Home</a></li>
          <li><a href="/chatbot" className="block py-2 px-4 hover:bg-blue-700 rounded">Chatbot</a></li>
          <li><a href="/user/login" className="block py-2 px-4 hover:bg-blue-700 rounded">Log Out</a></li>
        </ul>
      </div>
    </nav>
  );
}
