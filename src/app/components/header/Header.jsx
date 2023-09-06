import React from "react";
import "./header.css";
import Image from "next/image";
import phone from "../../assets/images/Phone.png";
import icons from "../../assets/images/icons.png";
import White from"../../assets/images/White.jpg";


const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-2 text-center">
            <Image src={phone} width={15} height={25} alt="logo" />
            1234567890
          </div>
          <div className="col-md-8">
            <form
              class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mt-2 d-flex"
              role="search"
            >
              <input
                type="search"
                class=" input "
                placeholder="Search... "
                aria-label="Search "
              />
            <button className="bbttnn"> <Image  className="icon" width={25} src={White} alt="icon"/> </button>
            </form>
          </div>
          <div className="col-md-2 mt-2 text-end text-center">
            <Image src={icons} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
