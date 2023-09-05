import React from "react";
import Image from "next/image";
import "./card.css";
import Group from "@/app/assets/images/Group.png";

const Card = () => {
  return (
    <>
      <div className="container mt-5 bg-clr">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class=" heading-word mt-5 dummy">
            <b>  Lorem Ipsum is simply dummy text <br />
              of the printing and typesetting </b>
            </h2>
            <p className="para-graph">
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

            <button type="button" class="buttton btn btn-sm text-white size py-2">
              Read more About us
            </button>
          </div>
          <div class="col-md-5 bg-img mt-4">
            <Image
              width={800}
              className="img-fluid bg-img"
              src={Group}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
