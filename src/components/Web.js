import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import "./Web.css";

const Web = () => {
  return (
    <div className="my_web">
      <h2 className="web_line">Social Media</h2>
      <ul>
        <li>
          <button>
            <a href="https://www.facebook.com/mukunthanvisvakarma/">
              <FaFacebook className="web_icon" />
              @Mukunthan
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://github.com/mukunthan7">
              <FaGithub className="web_icon" />
              @Mukunthan7
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://www.linkedin.com/in/mukunthan7/">
              <FaLinkedin className="web_icon" />
              @M.Mukunthan
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://www.instagram.com/lonely__soul_official/">
              <FaInstagram className="web_icon" />
              @Mukunthan.M
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="mailto:mukunthanm079@gmail.com">
              <SiGmail className="web_icon" />
              @M.Mukunthan
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://wa.me/+919629175812">
              <FaWhatsapp className="web_icon" />
              @+91 9629175812
            </a>
          </button>
        </li>
      </ul>
      <div className="copyright_container">
        <p className="copyright">
          © 2022 mukunthan mkwebdeveloper. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Web;
