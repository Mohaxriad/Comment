import React from "react";

import CCM from "./CCM";
import Phonepub from "./Phonepub";
import Navbar from "../Navbar";
import Section1 from "./Section1";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Section5 from "./section5";
import Filters from "./Filters";
import useAuth from "../../hooks/useAuth";


import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  Aos.init({
    duration:1800,
    offset:0,
  })

  const { auth } = useAuth();
  return (
    <>
    <div className=" overflow-hidden ">
      <na>
         <Navbar /> 
      </na>
      {/*<Section1 />*/}
      <Phonepub />
      <CCM />
      <Filters />
      <Section5 />
      <Footer />
      </div>
    </>
  );
};

export default Home;
