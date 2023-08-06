import React from "react";
// import Logo from "../moralis-logo.svg";
import Logo from "../moralis-logo.png";
import Eth from "../eth.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {

  const {address, isConnected, connect} = props;
  // let path = window.location.pathname;
  let pathUrl = useLocation();
  let path = pathUrl.pathname
  console.log(path,"hello");
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className={`${path==="/"?"headerItem headerItemActive":"headerItem"}`}>Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className={`${path==="/tokens"?"headerItem headerItemActive":"headerItem"}`}>Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
