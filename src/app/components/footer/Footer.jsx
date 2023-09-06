import React from "react";
import Image from "next/image";
import "./footer.css";

import Mark from "../../assets/images/Mark.png";
import icons from "../../assets/images/icons.png";
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <>
      <div class="container mt-5 py-5">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <Image src={Logo} width={20} height={20} className="mx-2 mb-2" />
              <span className="footer text-center">WED LOVE TO HERA FROM YOU</span>
            </a>
            <ul class="nav flex-column py-3">
              <p className="footer text-center">Contact us:</p>
              <p className="heading-word footer text-center"> owwtoys@gmail.com</p>
              <p className="heading-word footer text-center">+8801726920405</p>
              <p className="footer">Opening hours: 9am - 5.30pm MOnday - Friday</p>
            </ul>{" "}
          </div>

          <div class="col px-2 mb-3 footer">
            <p>
              {" "}
              <span className="heading-word footer">30% off</span> your first order
              when you subscribe. You will receive an email with a discount
              code.
            </p>
          </div>

          <div class="col  mb-3 text-center">
            <button className="width button-bg text-white footer">
              Subscribe now!
            </button>
          </div>
          <div class="col px-2 mb-3">
            <p>
              {" "}
              <Image src={Mark} width={30} className="mx-3" />{" "}
              <span className="footer">MORE INFORMATION</span>
            </p>
            <p>
              {" "}
              <span className="footer">Testimonials</span>
              <span className="mx-3 footer"> T&Cs and Privacy Policy</span>
              <span className="footer"> Sitemap</span>
              <span className="mx-3 footer">Return Policy</span>
              Wholesale Useful links
            </p>

            <div className="text-center">
              <Image src={icons} width={200} className="ms-3 mt-3" />
            </div>
          </div>
        </footer>
        <p className="text-center pb-5 footer">
          © 2022 Pebblechild UK Ltd. – All rights reserved | Website by Design
          Incorporated Ltd{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
