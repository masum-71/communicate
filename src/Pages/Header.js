import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation.json";

const Header = () => {
  return (
    <div className="md:flex mt-10 max-[640px]:text-center md:text-left justify-around items-center shadow-2xl bg-white my-5 mx-10 rounded-3xl">
      <div className="text-2xl text-blue-500 max-[640px]:text-lg">
        <h1>Stay Connected with your love one</h1>
        <p>Share your recent thoughts and photos</p>
      </div>
      <Player src={animation} className="h-72" loop autoplay />
    </div>
  );
};

export default Header;
