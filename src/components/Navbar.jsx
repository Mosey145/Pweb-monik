import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  // Fungsi untuk mengubah status open/close menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='background-header'>
        <div className='title-web'><h2>Monika WEB</h2></div>
        <div className='menu-header'>
          <h2>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          </h2>
        </div>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} {...props} className={`px-4 py-2 rounded-md transition ${isActive ? "bg-white text-gray-600 font-semibold" : "text-white hover:bg-gray-500"}`}>
        {children}
      </Link>
    </li>
  );
}
