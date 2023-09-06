import React from "react";
import "./Section.css";
import Image from "next/image";
import Leaf from "../../assets/images/Leaf.png";
import Women from "../../assets/images/Women.png";
import Hands from "../../assets/images/Hands.png";
import Clouds from "../../assets/images/Clouds.png";

const Section = () => {
const card = [

{

id: 1,
content: 'Eco-friendly Product',
ImageUrl: Leaf
},


{

  id: 2,

  content: 'Women Empowerment',
  ImageUrl: Women
  
  
  },
  

  {

    id: 3,

    content: '100% Recylable',
    ImageUrl: Hands
    
    
    },
    
    {

      id: 4,
      content: 'Zero Carbon Emission',
      ImageUrl: Clouds
      
      },
]
 return (
    <>
      <div className="container py-5 ground">
        <div>
          <h2 className="text-center first"> <b> WHAT WE DO </b> </h2>
          <p className="text-center graph">
            OWW Toys is established to produce eco-friendly toys. The toys are
            completely handmade with 100% organic <br /> cotton. In addition,
            OWW Toys are working to empower rural women to achieve sustainable
            development goals.
          </p>
        </div>

        <div className="colour">
          <div className="row row-cols-1 row-cols-lg-4  mb-5 text-center">


{card.map((item)=>(
  <div className="card">
    <div className="">
    <Image className="mt-2" src={item.ImageUrl} alt="leaf" />
<div>
<p className="py-3">{item.content}</p>


</div>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
