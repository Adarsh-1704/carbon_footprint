import React from "react";
import logo from "../logo.jpg";

export default function Footer() {
  return (
    <div className="d-flex mt-5" style={{ backgroundColor: "rgb(127, 212, 249)" }}>
      <div>
        <img src={logo} alt="" style={{ height: "100px" }} />
      </div>
      <div className="container mt-4">
        Empowering You to Combat Climate Change FootprintFinder, a Passion
        Project by IIT Roorkee Students, under the guidance of Prof. Ishan
        Bajaj. Discover Your Carbon Footprint Based on Your Lifestyle, and
        Receive Customized Action Steps to Reduce Your Environmental Impact.
        Join Us in Creating a Greener, Sustainable Future!
      </div>
    </div>
  );
}
