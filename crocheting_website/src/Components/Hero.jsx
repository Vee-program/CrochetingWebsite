import React from "react";
import hero_image from "../assets/hero_image.jpg";
import hero_image2 from "../assets/hero_image2.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero-left">
        <img src={hero_image} alt="hero_image" className="hero_image" />
      </div>
      <div className="hero-right">
        <h1 className="hero_heading">
          Handmade With Love, Woven With Passion
        </h1>
        <p className="hero_text">
          <i>What started as a hobby has grown into a brand that celebrates creativity and craftmanship.From trending ruffle hats to cozy scarves and stylish bags, every piece is handcrafted with care and made to be as unique as you.</i>
        </p>
        <div className="hero_button_container">
        <button className="hero_button_shop">Shop Now</button>
        <button className="hero_button_order">Place A Custom Order</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
