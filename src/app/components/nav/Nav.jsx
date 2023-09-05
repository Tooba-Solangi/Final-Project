import React from "react";
import "./nav.css";
import Image from "next/image";
import panda from "../../assets/images/panda.png";

const Nav = () => {
  return (
    <div class="container mt-2 navbar-1">
    
      <nav class=" navbar navbar-expand-lg  navbar1">
        <div class=" ">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
     
          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul class="navbar-nav px-5 gap-3 fnt">
              <li class=" ">
                <a href="#" class="nav-link text-success ">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-black">
                  SHOP
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link text-black">
                  ABOUT US
                </a>
              </li>
              <a class="navbar-brand ps-5 mx-5" href="#">
                <Image src={panda} alt="logo" />
              </a>
              <li class="nav-item">
                <a href="#" class="nav-link text-black">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-black">
                  CONTACT
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-success">
                  WATCH VIDEO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
