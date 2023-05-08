import React from "react";
import pic from "./assets/pic1.svg";
import { Link } from "react-router-dom";



const Filters = () => { 
  return ( 
     

  <div className=" max-w-[1600px]  mx-auto justify-center items-center grid  md:grid-cols-2 bg-[#FBEDEC]"> 
  
               < img className=" w-[400px] mx-auto my-4" src={pic} alt="/" data-aos='zoom-in-left' data-aos-delay='300' data-aos-duration='1000'  />
  
          <div className="flex flex-col  my-6   "> 
                       <h4 className="text-[#FB9B90] text-3xl font-bold font-concert" data-aos='fade-down' data-aos-delay='300' data-aos-duration='1000'> LA CRECHE DA COTE</h4>

                      <h1 className="xs:text-3xl text-2xl font-bold font-[Inter] py-2" data-aos='fade-down' data-aos-delay='300' data-aos-duration='1000' >Rechercher En Utilisant Nos Filtres</h1>

                    <div className=" px-3 grid  justify-center   xxs:grid-cols-2  xs:grid-cols-3 mx:auto   md:grid-cols-2 bo:grid-cols-3  ">
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='1900'> Nom de la crèche </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-up' data-aos-delay='300' data-aos-duration='1900'> Jours d’accueil </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2  xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-left' data-aos-delay='300' data-aos-duration='1900' > Privée </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='1900'> A proximité </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-up' data-aos-delay='300' data-aos-duration='1900'> Age d’accueil </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-left' data-aos-delay='300' data-aos-duration='1900'> Places disponible </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='1900'> Etatique </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-up' data-aos-delay='300' data-aos-duration='1900'> Enfants handicapés </button>
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-left' data-aos-delay='300' data-aos-duration='1900'> Medecin </button> 
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='1900'> Adresse </button> 
                             <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border-2 border-[#ED6361] hover:bg-[#FB9B90]" data-aos='fade-up' data-aos-delay='300' data-aos-duration='1900'> Transport inculs </button> 
                             <button className=" w-[160px] rounded-md font-medium my-2 xs:mx-1 py-3 text-[#191A43] border-2 bg-[#FF7D6B] border-[#ED6361] hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-100"
                             data-aos='fade-left' data-aos-delay='300' data-aos-duration='1900'>
                             <a href="/Search">Plus de filtres</a> 
                              </button>
                    </div> 

          </div>

 </div>

  )
}

export default Filters;