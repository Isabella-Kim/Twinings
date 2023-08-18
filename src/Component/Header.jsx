import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/Twinings.png`}
            alt="logo"
          />
        </Link>
        <nav>
          <div className="gnb">
            <Link to="/">Black Tea</Link>
            <Link to="/Superblends">Superblends</Link>
            <Link to="/">Earl Grey Tea</Link>
            <Link to="/">Fruit&Herbal</Link>
            <Link to="/">Green Tea</Link>
            <Link to="/">Loose Leaf Tea</Link>
          </div>
          <div className="icon">
            <Link to="/">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Link>
            <Link to="/Login">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "red" }}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
