import React from "react";
import "./hero.css";

import Image from "next/image";
import toys from "../../assets/images/toys.png";
import pic from "../../assets/images/pic.png";
import shadow from "../../assets/images/shadow.png";
import First from "../../assets/images/First.png";
import Gudo from "../../assets/images/Gudo.png";
import Car from "../../assets/images/Car.png";
import Cartoon from "../../assets/images/Cartoon.png";
import Shd from "../../assets/images/Shd.png";
import Next from "../../assets/images/Next.png";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row featurette">
        <div className="col-md-7 mt-5">
          <h1 className=" hero ">
           <b> Experience Better <br />
            Real <span className="heading-word"> OWWToys</span> with us.</b>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>

          <div className="">
            <button type="button" className="btn-color text-white btn-space para">
              Shop Now
            </button>

            <button type="button" className="btn-two">
            <b>  Watch video </b>
            </button>
          </div>
        </div>

        <div className="col-md-5">
          <Image className="img-fluid" src={toys} alt="toys" />
          <Image
            width={200}
            className="middle-img mb-5"
            src={pic}
            alt="image"
          />
          <Image className="shadow" src={shadow} alt="shadow" />
        </div>

        <div>
          <h4 className="heading-word hd"> <b> Most Popular Product </b> </h4>
        </div>

        <div className="row row-cols-1 row-cols-lg-5  mb-5 justify-content-between justify-content-center">
          <div className="bg">
            <Image className="img-fluid" width={300} src={First} alt="pic" />
            <Image className="shadow-2 img-fluid" src={Shd} alt="pic" />
            <p className="text-center pics">Robin rattle</p>
          </div>

          <div>
            <Image className="img-fluid" width={300} src={Gudo} alt="pic" />
            <Image className="shadow-2 img-fluid" src={Shd} alt="pic" />
            <p className="text-center pics">Puffin rattle</p>
          </div>

          <div className="Car">
            <Image className=" img-fluid" width={100} src={Car} alt="pic" />
            <Image className="shadow-3 img-fluid" src={Next} alt="pic" />
            <p className="text-center pics">Tractor rattle</p>
          </div>

          <div className="carton-bg">
            <Image className=" img-fluid" width={300} src={Cartoon} alt="pic" />
            <Image className="shadow-2 img-fluid" src={Shd} alt="pic" />
            <p className="text-center pics">Penguin rattle – knitting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
