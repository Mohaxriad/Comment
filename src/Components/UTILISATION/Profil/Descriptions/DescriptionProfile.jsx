import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import AccordionDescriptionProfil from "../../../Demande/Reservation/steps/AccordionDescriptionProfil";

export default function DescriptionProfile(props) {
  const { auth } = useAuth();
  return (
    <>
      <div className=" mx-[5%] ld:mx-[20%] mb-10 my-6 rounded-lg border-4 border-[#f09492] p-5 bg-[#f1c1c0]">
        <div className="px-4 sm:px-0">
          <h1 className="text-3xl  leading-7 text-rose-950">
            Informations Personnelles
          </h1>
        </div>
        <div className="mt-6  border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Nom
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.nom}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Prenom
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
              {props.prenom}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Pseudo
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.username}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Adresse Email
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Numero de telephone
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.telephone}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Addresse
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.adresse}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Code Postal
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.codePostal}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Commune
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
               {props.commune}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">
                Wilaya
              </dt>
              <dd className="mt-1 text-md leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.wilaya}
              </dd>
            </div>
          
            
          </dl>
        </div>

        <div className=" mt-5">
          <h2 className=" text-2xl font-medium text-blue-950 mb-5">
            Souhaitez vous modifier ces informations ?
          </h2>
          <AccordionDescriptionProfil  nom={props.nom} prenom={props.prenom} adresse={props.adresse}
         email={props.email} telephone={props.telephone}
         codePostal={props.codePostal} username={auth?.user?.username}  />
        </div>
      </div>
    </>
  );
}