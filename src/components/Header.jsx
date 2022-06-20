import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../orangedc.svg";

const Header = () => {
  let navigate = useNavigate();
  const headerStyle = {
    height: "6rem",
    margin: "1rem",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const logoStyle = {
    maxWidth: "120px",
    height: "60px"
  };
  const handleConfig = (e) => {
    e.preventDefault();
    localStorage.removeItem("countdown");
    navigate("/");
  };
  return (
    <>
      <header style={headerStyle}>
        <img src={logo} alt="logo" style={logoStyle} />
        <button className="btn" onClick={handleConfig}>
        <i className="fa fa-edit"></i> Config
        </button>
      </header>
      
    </>
  );
};

export default Header;
