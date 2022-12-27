import React from "react";
import Header from "./Header";
import Upload from "./Upload";

const Home = () => {
  return (
    <div className=" max-w-[1200px] m-auto py-10">
      <Header></Header>
      <Upload></Upload>
    </div>
  );
};

export default Home;
