import { useContext } from "react";

import { langContext } from "../../context/LangContext";
import Logo from "../Logo/Logo";

import "./Header.css";

const Header = () => {
  const { langState, setLangState, langText } = useContext(langContext);
  const headerData = langText.header;

  // Change Language State
  const changeLangDir = () => setLangState((langState) => !langState);

  const ToggleNav = () => {
    document.querySelector(".nav-bar-list").classList.toggle("active");
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <Logo />
        <div onClick={ToggleNav} className="navbar-ico">
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <div className="nav-bar-list">
          <ul className="nav-list">
            <li className="nav-bar-item">
              <a href="#">{headerData.main}</a>
            </li>
            <li className="nav-bar-item">
              <a href="#">{headerData.prices}</a>
            </li>
            <li className="nav-bar-item">
              <a href="#">{headerData.contact}</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-bar-item">
              <a href="#">{headerData.shipment}</a>
            </li>
            <li className="nav-bar-item">
              <a href="#">{headerData.logIn}</a>
            </li>
            <li onClick={changeLangDir} className="nav-bar-item lang-item">
              <a href="#">{headerData.lang}</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
