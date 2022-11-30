import React, { useState } from "react";
import "../Styles/navBar.css";

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open)
  };

  return (
    <nav className="navBox">
      <h1 className="edie">{props.logo}</h1>
      <div className="list">
        <ul className= {`listUl ${open ? 'mobile' : ''}`}>
          <li className="active">
            <a href={props.ref1}>{props.li1}</a>
          </li>
          <li>
            <a href={props.ref2}>{props.li2}</a>
          </li>
          <li>
            <a href={props.ref3}>{props.li3}</a>
          </li>
          <li>
            <a href={props.ref4}>{props.li4}</a>
          </li>
          <li>
            <a href={props.ref5}>{props.li5}</a>
          </li>
        </ul>
        <div className={`bars ${open ? 'mobile' : ''}`} onClick={() => handleClick()}>
          <i className="fa-solid fa-bars fa-lg"></i>
        </div>
      </div>
    </nav>
  );
};
