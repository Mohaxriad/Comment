import React from "react";
import Creches from "./Creches";
import { AiOutlinePlus } from 'react-icons/ai';




const GstCreches = () => { 
  return (   
    <div className="  w-[90%] max-w-[1100px] mt-[5]  mx-auto text-center flex flex-col justify-center text-[#0B0C38] font-inter ">

    <h1 className=" md:text-7xl sm:text-6xl text-4xl  font-bold md:py-6 font-concert">
      Espace Propiétaire
    </h1>
    <div className=" grid grid-cols-2 text-center items-center w-full border-b-4 border-red-100 border-t-4 my-3 ">
      <h4 className=" md:text-4xl sm:text-3xl pio:text-2xl text-xl my-2 font-bold md:py-6 font-concert text-start ml-[5%]  ">
        Mes Creches
      </h4>
      <button className="bg-[#FB9B90] justify-self-end mr-[5%] w-fit rounded-md my-2 font-medium text-center  text-[#191A43] ring-2 ring-[#ED6361] hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300" title="Ajouter">
        < AiOutlinePlus size={20} className=' text-center cursor-pointer mx-1 my-1 xs:mx-3 xs:my-2 md:mx-5 md:my-4' />
      </button>
    </div>


   <Creches/>

    
  







  </div>

  
  )
}

export default GstCreches;