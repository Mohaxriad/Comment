import React, {useEffect, useState} from "react";
import Navbar from "../../Navbar";
import DescriptionProfile from "./Descriptions/DescriptionProfile";
import Footer from "../../HomePage/Footer";
import DescriptionCompte from "./Descriptions/DescriptionCompte";
import useAuth from "../../../hooks/useAuth";
import { users } from '../../../data';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const MonProfil = () => {
    const { auth } = useAuth();
    const [login,SetLogin] = useState(false)
    const [email,SetEmail]=useState('')
    const [username,SetUsername]=useState('')
    const [nom,SetNom]=useState('')
    const [prenom,SetPrenom]=useState('')
    const [telephone,SetTelephone]=useState('')
    const [adresse,SetAdresse]=useState('')
    const [codePostal,SetCodePostal]=useState('')
    const [commune,SetCommune]=useState('')
    const [wilaya,SetWilaya]=useState('')


    let storeUser;
    useEffect(()=>{
        storeUser=JSON.parse(localStorage.getItem('user'))

        if(storeUser!=null)
        {
            SetLogin(true)
            SetAdresse(storeUser.user.adresse)
            SetCommune(storeUser.user.commune)
            SetCodePostal(storeUser.user.codePostal)
            SetNom(storeUser.user.nom)
            SetPrenom(storeUser.user.prenom)
            SetWilaya(storeUser.user.wilaya)
            SetTelephone(storeUser.user.telephone)
            SetEmail(storeUser.user.email)
            SetUsername(storeUser.user.username)

        }
    } ,[])

  
  return (
    <>
  
      <nav>
        <Navbar />
      </nav>
      <div>
        <h2 className="text-xl text-blue-950  text-center mb-5 font-medium sm:text-3xl ">
          Informations concernat votre compte
        </h2>

      
         <DescriptionProfile
             email={email} username={username} nom={nom}
             prenom={prenom}  telephone={telephone} adresse={adresse}
             codePostal={codePostal} commune={commune} wilaya={wilaya}
         />

      

        <DescriptionCompte />
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default MonProfil;
