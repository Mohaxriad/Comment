import React from "react";
import Phone from "./assets/phone pic.png";
import { Link } from "react-router-dom";
import kid from "./assets/KIDD.svg";


const Phonepub = () => {
  return (
    <div className="w-full text-[#0B0C38] bg-[#FBEDEC] py-16 px-4 ">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2">
        <img data-aos='zoom-in-right' data-aos-offset='100'
          className="w-[500px] mx-auto my-4 hover:scale-105 duration-300"
          src={Phone}
          alt="/"
        />
        <div className="flex flex-col justify-center" data-aos='fade-down' data-aos-delay='300' data-aos-duration='1800'>
          <p className="text-[#FB9B90] font-bold"> LA CRECHE D'ACOTE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Trouver Une Creche Idéale
          </h1>
          <p className="text-xl" data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
            Pour les parents, trouver une crèche qui satisfait leur critères
            peut etre un véritable défi. Heureusement, La crèche d'à côté est là
            pour vous aider dans votre recherche. Avec son large panel de
            filtres, notre site est en mesure de vous guider dans votre choix et
            de vous aider à trouver la crèche idéale pour vos enfants.
          </p>
          < Link to="/Search">
            {" "}
            <button className="bg-[#FB9B90] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 text-[#191A43] ring-2 ring-[#ED6361]  hover:bg-rose-950 hover:text-white hover:scale-105 duration-300" data-aos='fade-up' data-aos-delay='300' data-aos-duration='1000'>
              {" "}
              Rechercher
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phonepub;
