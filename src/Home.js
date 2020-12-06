import React from "react";
import "./App";
import Banner from "./Banner";

export default function Home(props) {
  return (
    <div className="home">
      <Banner />
      <div className="home__section"></div>
    </div>
  );
}
