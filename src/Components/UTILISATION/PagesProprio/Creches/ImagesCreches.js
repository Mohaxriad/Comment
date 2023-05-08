import React from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

SwiperCore.use([Navigation]);



function  ImagesCreches (props) {
    const sliderRef = useRef();
    const image = props.image;
  
    
return (
    <div className="flex justify-center py-5 px-0  gap-8 items-center  ">
    <div className="flex xxs:ml-[5%] ml-[1%] z-50" >
       <button onClick={() => sliderRef.current?.slidePrev()} className="bg-red-100   flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full ring ring-[#fc8280] shadow focus:outline-none hover:bg-white hover:ring-rose-900 hover:scale-125 duration-300">
         <svg
           viewBox="0 0 20 20"
           fill="currentColor"
           class="chevron-left w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
             clip-rule="evenodd"
           ></path>
         </svg>
       </button>
     </div>

   <Swiper freeMode={true} grabCursor={true}
     Pagination={true}
    
   
     onSwiper={it => (sliderRef.current = it)} modules={[Navigation]}
     className="mySwiper "
     slidesPerView={1} spaceBetween={25}
     


     breakpoints={{
       0: {
         slidesPerView: 1,
       },
       567: {
         slidesPerView: 1,
         spaceBetween: 15,
       },
       808: {
         slidesPerView: 1,
         spaceBetween: 25,
       },


     }}
   >
    
     {image.map((slide, index) => {
   
       return (

         <SwiperSlide key={index} className=" overflow-hidden h-100  mx-auto  w-full  flex   my-4 bg-white shadow-[0px_4.39131px_17.5652px_rgba(158,158,158,0.25)] rounded-[12px]  " >

           <img className=" mx-auto mt-2 w-[80%] " src={image[index]} alt="" />


         </SwiperSlide>



       );
     })}

     

   </Swiper>

   <div className="flex xxs:mr-[5%] mr-[1%] z-50" >
       <button onClick={() => sliderRef.current?.slideNext()} className="bg-red-100   flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full ring ring-[#fc8280] shadow focus:outline-none hover:bg-white hover:ring-rose-900 hover:scale-125 duration-300">
         <svg
           viewBox="0 0 20 20"
           fill="currentColor"
           class="chevron-right w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
             clip-rule="evenodd"
           ></path>
         </svg>
       </button>
    </div>

 </div>
    
)


}

export default ImagesCreches; 