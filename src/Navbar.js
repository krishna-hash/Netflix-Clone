import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [change, setchange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setchange(true);
      } else {
        setchange(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <nav className={`nav ${change && "black"}`}>
      <p>krishna</p>
      <img
        className="logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol-768x240.jpg"
      ></img>

      <img
        className="emoj"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fideasinspiringinnovation.files.wordpress.com%2F2010%2F03%2Flogo_tui-airines_de-2.png&f=1&nofb=1"
      ></img>
    </nav>
  );
}

export default Navbar;
