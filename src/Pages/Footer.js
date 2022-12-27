import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-gray-500 text-white font-serif  ">
        <div>
          <p className="font-bold">
            Copyright © 2022 - All right reserved by{" "}
            <span className="text-orange-300">Masum Billah</span>
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Find me on Social Media:</p>
          <div className="flex">
            <a target="blank" href="https://www.facebook.com/Masum.1971/">
              {" "}
              <FaFacebook className="text-2xl  mr-4"></FaFacebook>{" "}
            </a>
            <a target="blank" href="https://github.com/masum-71">
              <FaGithub className="text-2xl"></FaGithub>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/masumbillah71/">
              <FaLinkedin className="text-2xl ml-4"></FaLinkedin>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
