import React from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import AccordionDescriptionCompte from "../../../Demande/Reservation/steps/AccordionDescriptionCompte";

export default function DescriptionCompte() {
  return (
    <>
      <div className=" mx-[20%] mb-10 my-6 rounded-lg border-4 border-[#f09492] p-5 bg-[#f1c1c0]">
        <div className="px-4 sm:px-0">
          <h1 className="text-3xl  leading-7 text-rose-950">
            Modification mot de passe
          </h1>
        </div>
        <div className="mt-6  border-gray-100">
      
        </div>
        <div className=" mt-5">
          <h2 className=" text-2xl font-medium text-blue-950 mb-5">
            Modifier votre mot de passe ?
          </h2>
          <AccordionDescriptionCompte />
        </div>
      </div>
    </>
  );
}