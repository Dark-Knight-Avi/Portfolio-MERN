import React from "react";

const Menu = () => {
  return (
    <>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <a href="/">Home</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <a href="/">About</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <a href="/">Projects</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
        <a href="/">Contact</a>
      </li>
    </>
  );
};

export default Menu;
