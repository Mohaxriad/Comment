import React from "react";
import fam from "./assets/Family (2).svg";
import bg from "./assets/Ellipse.svg";

const Section1 = () => {
  return (
    <>
      <div className="section1 flex max-h-full h-full flex-row mx-10">
        <div className="mt-12 mx-10">
          <div>
            <h1 className="text-5xl text-blue-950 font-[Concert One] ml-10" data-aos='fade-down' data-aos-delay='100' data-aos-duration='1000' >
              Bienvenue
            </h1>
            <h2 className="mt-12  text-blue-950 text-3xl ml-10 font-semibold  " data-aos='fade-up' data-aos-delay='100' data-aos-duration='1000'>
              Dans notre site vous pouvez explorer notre <br /> vaste panel de
              crèches et trouver celle qui correspond le mieux à vos souhaits
            </h2>
          </div>
        </div>
        <div>
          <img src={fam} data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'></img>
        </div>
      </div>
    </>
  );
};

export default Section1;
