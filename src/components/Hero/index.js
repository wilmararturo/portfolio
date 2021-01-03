import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./style.css";

function Hero() {
  return (
    <div className="hero-border">
      <div className="hero-div bg-secondary text-white col-md-9">
        <h1 className="hero-h1 display-8">
          {" "}
          <PersonIcon fontSize="large" /> Wilmar A. Stephens
        </h1>
      </div>
    </div>
  );
}

export default Hero;
