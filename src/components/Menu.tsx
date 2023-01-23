import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

export default Menu;
