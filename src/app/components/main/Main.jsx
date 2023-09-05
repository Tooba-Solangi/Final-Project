import React from "react";
import Image from "next/image";
import "./main.css";
import Last from "../../assets/images/Last.png";

const Main = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div class="row main">
          <div class="col-md-7 order-md-2">
            <h2 class="  heading-word mt-5 dummy">
             <b> Lorem Ipsum is simply dummy text <br />
              of the printing and typesetting </b>
            </h2>
            <p class="para-graph">
              It is a long established fact that a reader will be distracted{" "}
              <br />
              by the readable content of a page when looking at its layout.{" "}
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of <br />
              letters, as opposed to using 'Content here, content here', making
              it look like readable <br />
              English. Many desktop publishin <br />
              by the readable content of a page when looking at its layout.{" "}
              <br />
              by the readable content of a page when looking at its layout.{" "}
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of <br />
              letters, as opposed to using 'Content here, content here', making
              it look like readable{" "}
            </p>

            <button type="button" class="buttton btn btn-sm text-white py-2">
              Read more About us
            </button>
          </div>
          <div class="col-md-5 order-md-1 mt-4">
            <Image width={800} className="img-fluid mt-4" src={Last} alt="toy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
