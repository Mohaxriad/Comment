import React from "react";

import Select from "react-select";
import { useState, useEffect, useRef } from "react";
import axios from '../api/axios';
import Parent from "./Assets/Parent.svg";
import Proprio from "./Assets/Proprio.svg";
import Navbar from "./Navbar";


const SIGNUP_URL = 'auth/signup'
const PASSWORDVALID = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const EMAILVALID = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMVALID = /^0\d{9}$/;
const CODEPOSTVALID = /^\d{5}$/;



function Form() {
  
  const wilayaoptions = [
    { value: "Adrar", label: "1-Adrar" },
    { value: "Chlef", label: "2-Chlef" },
    { value: "Laghouat", label: "3-Laghouat" },
    { value: "Oum El Bouaghi", label: "4-Oum El Bouaghi" },
    { value: "Batna", label: " 5-Batna" },
    { value: "Béjaïa", label: "6-Béjaïa" },
    { value: "Biskra", label: " 7-Biskra" },
    { value: "Béchar", label: "8-Béchar" },
    { value: "Blida", label: " 9-Blida" },
    { value: "Bouira", label: "10-Bouira" },
    { value: "Tamanrasset", label: "11-Tamanrasset " },
    { value: "Tébessa<", label: "12-Tébessa<" },
    { value: "Tlemcen", label: " 13-Tlemcen" },
    { value: "Tiaret", label: "14-Tiaret" },
    { value: "Tizi Ouzou", label: " 15-Tizi Ouzou" },
    { value: "Alger", label: "16-Alger" },
    { value: "Djelfa", label: "17-Djelfa " },
    { value: "Jijel", label: "18-Jijel" },
    { value: "Sétif", label: "19-Sétif " },
    { value: "Saïda", label: "20-Saïda" },
    { value: "Skikda", label: " 21-Skikda" },
    { value: "Sidi Bel Abbès", label: "22-Sidi Bel Abbès" },
    { value: "Annaba", label: "23-Annaba " },
    { value: "Guelma", label: "24-Guelma" },
    { value: "Constantine", label: " 25-Constantine" },
    { value: "Médéa", label: "26-Médéa" },
    { value: "Mostaganem", label: " 27-Mostaganem" },
    { value: "M'Sila", label: "28-M'Sila" },
    { value: "Mascara", label: " 29-Mascara" },
    { value: "Ouargla", label: "30-Ouargla" },
    { value: "Oran", label: " 31-Oran" },
    { value: "El Bayadh", label: "32-El Bayadh" },
    { value: "Illizi", label: " 33-Illizi" },
    { value: "Bordj Bou Arreridj", label: "34-Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "35-Boumerdès " },
    { value: " El Tarf", label: " 36-El Tarf" },
    { value: "Tindouf", label: " 37-Tindouf" },
    { value: "Tissemsilt", label: "38-Tissemsilt" },
    { value: "El Oued", label: "39-El Oued " },
    { value: "Khenchela", label: "40-Khenchela" },
    { value: "Souk Ahras", label: "41-Souk Ahras " },
    { value: "Tipaza", label: "42-Tipaza" },
    { value: "Mila", label: " 43-Mila " },
    { value: "Aïn Defla", label: "44-Aïn Defla" },
    { value: "Naâma", label: "  45-Naâma" },
    { value: "Aïn Témouchent", label: "46-Aïn Témouchent" },
    { value: "Ghardaïa", label: " 47-Ghardaïa " },
    { value: "Relizane", label: " 48-Relizane" },
    { value: "Timimoun", label: "49-Timimoun " },
    { value: "Bordj Badji Mokhtar", label: " 50-Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: " 51-Ouled Djellal" },
    { value: "Béni Abbès ", label: "52-Béni Abbès " },
    { value: "In Salah", label: " 53-In Salah" },
    { value: "In Guezzam", label: "54-In Guezzam" },
    { value: "Touggourt ", label: "55-Touggourt  " },
    { value: "Djanet ", label: "56-Djanet " },
    { value: "El M'Ghair", label: " 57-El M'Ghair" },
    { value: "El Meniaa ", label: "58-El Meniaa " },
  ]
  const communeoptions = [
    { value: "Adrar", label: "1-Adrar" },
    { value: "Chlef", label: "2-Chlef" },
    { value: "Laghouat", label: "3-Laghouat" },
    { value: "Oum El Bouaghi", label: "4-Oum El Bouaghi" },
    { value: "Batna", label: " 5-Batna" },
    { value: "Béjaïa", label: "6-Béjaïa" },
    { value: "Biskra", label: " 7-Biskra" },
    { value: "Béchar", label: "8-Béchar" },
    { value: "Blida", label: " 9-Blida" },
    { value: "Bouira", label: "10-Bouira" },
    { value: "Tamanrasset", label: "11-Tamanrasset " },
    { value: "Tébessa", label: "12-Tébessa<" },
    { value: "Tlemcen", label: " 13-Tlemcen" },
    { value: "Tiaret", label: "14-Tiaret" },
    { value: "Tizi Ouzou", label: " 15-Tizi Ouzou" },
    { value: "Alger", label: "16-Alger" },
    { value: "Djelfa", label: "17-Djelfa " },
    { value: "Jijel", label: "18-Jijel" },
    { value: "Sétif", label: "19-Sétif " },
    { value: "Saïda", label: "20-Saïda" },
    { value: "Skikda", label: " 21-Skikda" },
    { value: "Sidi Bel Abbès", label: "22-Sidi Bel Abbès" },
    { value: "Annaba", label: "23-Annaba " },
    { value: "Guelma", label: "24-Guelma" },
    { value: "Constantine", label: " 25-Constantine" },
    { value: "Médéa", label: "26-Médéa" },
    { value: "Mostaganem", label: " 27-Mostaganem" },
    { value: "M'Sila", label: "28-M'Sila" },
    { value: "Mascara", label: " 29-Mascara" },
    { value: "Ouargla", label: "30-Ouargla" },
    { value: "Oran", label: " 31-Oran" },
    { value: "El Bayadh", label: "32-El Bayadh" },
    { value: "Illizi", label: " 33-Illizi" },
    { value: "Bordj Bou Arreridj", label: "34-Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "35-Boumerdès " },
    { value: " El Tarf", label: " 36-El Tarf" },
    { value: "Tindouf", label: " 37-Tindouf" },
    { value: "Tissemsilt", label: "38-Tissemsilt" },
    { value: "El Oued", label: "39-El Oued " },
    { value: "Khenchela", label: "40-Khenchela" },
    { value: "Souk Ahras", label: "41-Souk Ahras " },
    { value: "Tipaza", label: "42-Tipaza" },
    { value: "Mila", label: " 43-Mila " },
    { value: "Aïn Defla", label: "44-Aïn Defla" },
    { value: "Naâma", label: "  45-Naâma" },
    { value: "Aïn Témouchent", label: "46-Aïn Témouchent" },
    { value: "Ghardaïa", label: " 47-Ghardaïa " },
    { value: "Relizane", label: " 48-Relizane" },
    { value: "Timimoun", label: "49-Timimoun " },
    { value: "Bordj Badji Mokhtar", label: " 50-Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: " 51-Ouled Djellal" },
    { value: "Béni Abbès ", label: "52-Béni Abbès " },
    { value: "In Salah", label: " 53-In Salah" },
    { value: "In Guezzam", label: "54-In Guezzam" },
    { value: "Touggourt ", label: "55-Touggourt  " },
    { value: "Djanet ", label: "56-Djanet " },
    { value: "El M'Ghair", label: " 57-El M'Ghair" },
    { value: "El Meniaa ", label: "58-El Meniaa " },
  ]

  const emailRef = useRef();
  const errRef = useRef();

  const [wilaya , setWilaya] = useState('');

 
  const [commune , setCommune] = useState('');




  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [telephone, setTelephone] = useState('');
  const [validTelephone, setValidTelephone] = useState(false);
  const [telephoneFocus, setTelephoneFocus] = useState(false);

  const [codePostal, setCodePostal] = useState('');
  const [validCodePostal, setValidCodePostal] = useState(false);
  const [codePostalFocus, setCodePostalFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
 
  const [username, setUsername] = useState('');

  const [success,setSuccess]=useState(false)

  const roleoptions = [
    { value: 'parent' , label : 'parent' },
    { value: 'proprietaire', label: 'proprietaire' }
  ]

  const sexeoptions = [
    { value: "HOMME", label: "HOMME" },
    { value: "FEMME", label: "FEMME" },

  ];

  const [role , setRole] = useState('');

  

  const [sexe , setSexe] = useState('');



  useEffect(() => {
    emailRef.current.focus();
}, [])

useEffect(() => {
  setValidEmail(EMAILVALID.test(email));
}, [email])

useEffect(() => {
  setValidTelephone(NUMVALID.test(telephone));
}, [telephone])

useEffect(() => {
  setValidCodePostal(CODEPOSTVALID.test(codePostal));
}, [codePostal])


useEffect(() => {
  setValidPassword(PASSWORDVALID.test(password));
  setValidMatch(password === matchPwd);
}, [password, matchPwd])

useEffect(() => {
  setErrMsg('');
}, [email, telephone ,codePostal , password, matchPwd ])



const handleSubmit = async (e) => {
  e.preventDefault();
  // if button enabled with JS hack
  
  const v1 = EMAILVALID.test(email);
  const v2 = PASSWORDVALID.test(password);
  const v3 = password === matchPwd ;
  const v4 = CODEPOSTVALID.test(codePostal);
  const v5 = NUMVALID.test(telephone);
  if (!v1 || !v2 || !v3 || !v4 || !v5) {
      setErrMsg("Entrée invalide");
      return;
  } 
  
 

  try {
    const response = await axios.post(SIGNUP_URL,
        JSON.stringify({username, email, password ,nom ,prenom ,adresse,telephone,wilaya,commune,codePostal,sexe,role }),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    console.log(response?.data);
    console.log(response?.accessToken);
    console.log(JSON.stringify(response))
    setSuccess(true);
    //clear state and controlled inputs
    //need value attrib on inputs for this
    setEmail('');
    setUsername('');
    setPassword('');
    setNom('');
    setPrenom('');
    setAdresse('');
    setTelephone('');
    setCodePostal('');
    
} catch (err) {
    if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 409) {
        setErrMsg('Email Taken');
    } else {
        setErrMsg('Registration Failed')
        console.log(err)
    }
    errRef.current.focus();
}



}


  return (
    <>
    { success ? (
      <section>
          <h1>Success!</h1>
          <p>
              <a href="/Login">Sign In</a>
          </p>
      </section>
  ) : (
    <section>
        <nav>
        <Navbar />
      </nav>
          <div className="titre">
        <h1 className="text-4xl">Inscrivez vous !</h1>
      </div>
    <form className="FormInscription mb-4" onSubmit={handleSubmit} >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="ml-3 text-l font-semibold leading-7 text-blue-950">
            Profil
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Certaines de ses informations seront importantes
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm bg-white ring-2 ring-inset ring-red-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rose-900 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    required
                    value={username }
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 px-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-950">
            Informations Personnelles{" "}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Utilisez une addresse mail permanante et accessible afin de pouvoir
            recevoir nos emails .
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                 required
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="prename"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Prenom
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="prename"
                  id="prename"
                  value={prenom }
                  onChange={(e) => setPrenom(e.target.value)}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Addresse mail
              </label>
              <div className="mt-2">
                <input
                
                  id="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                   <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                         E-mail non valide.
                     </p>
              </div>
            </div>

            <div id="select">
              <div className="mb-2 block ">
                <label
                  htmlFor="sexe"
                
                >
                  Sexe
                </label>
              </div>
              <div className="ring-2 ring-red-400 rounded-md " >
                <Select required   
      
                  onChange={(value) => setSexe(value.value)}
                    options={sexeoptions} />
                
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Votre addresse de residence complete
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  value={adresse }
                  onChange={(e) => setAdresse(e.target.value)}
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <div id="select">
                <div className="mb-2 block ">
                  <label
                    htmlFor="wilaya"
                    value="Select your type font-[Inter] text-blue-950"
                  >
                    Wilaya
                  </label>
                </div>
                <div className="ring-2 ring-red-400 rounded-md ">
                  <Select  required
                  onChange={(value) => setWilaya(value.value)}
                 options={wilayaoptions}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <div id="select">
                <div className="mb-2 block ">
                  <label
                    htmlFor="commune"
                    value="Select your type font-[Inter] text-blue-950"
                  >
                    Commune
                  </label>
                </div>
                <div className="ring-2 ring-red-400 rounded-md ">
                  <Select  required
                   onChange={(value) => setCommune(value.value)}
                    options={communeoptions} />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Numero de telephone
              </label>
              <div className="mt-2">
                <input
                required
                value={ telephone }
                  onChange={(e) => setTelephone(e.target.value)}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="number"
                  aria-invalid={validTelephone ? "false" : "true"}
                  aria-describedby="telnote"
                  onFocus={() => setTelephoneFocus(true)}
                  onBlur={() => setTelephoneFocus(false)}
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

<p id="telnote" className={telephoneFocus && telephone && !validTelephone ? "instructions" : "offscreen"}>
                       Telephone non valide 
                     </p>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
                
              >
                Code postal
              </label>
              <div className="mt-2">
                <input
                required
                  value={codePostal }
                  onChange={(e) => setCodePostal(e.target.value)}
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  aria-invalid={validCodePostal ? "false" : "true"}
                  aria-describedby="codepostnote"
                  onFocus={() => setCodePostalFocus(true)}
                  onBlur={() => setCodePostalFocus(false)}
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p id="codepostnote" className={codePostalFocus && codePostal && !validCodePostal ? "instructions" : "offscreen"}>
                       Code postal doit etre compose de 5 chiffres
                     </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="border-b border-gray-900/10 pb-9">
          <h2 className="ml-2 mb-3 text-l font-semibold leading-7 text-blue-950">
            Mode d'utilisation
          </h2>
          <div className="Choose mt-3 mx-2 grid grid-cols-2">
        <div className="Proprio rounded-md p-10 bg-[#FBEDEC]  mr-2 ring ring-[#ff3b4e] ">
            <div className="flex justify-center ">
          
                 
                <h2 className=" text-3xl text-rose-900 text-center font-semibold mb-3 ">
                  Un Proprietaire
                </h2>
                

             
            </div>

            
            <div className="rounded-md bg-[white] p-5 grid ring  max-w-sm ring-[#f15968]">
            <img src={Proprio} alt="/" className=" hidden  ld:flex ld:justify-self-center"></img> 
            <h4>
                Un compte propriétaire vous permet de bénéficier des
                fonctionnalités du mode parent, mais également ajouter les
                crèches que vous possédez sur notre site afin d'attirer de
                nouveaux clients. En plus de pouvoir gérer les inscriptions et
                les réservations, ainsi que communiquer par e-mail avec les
                parents intéressés par vos services.{" "}
              </h4>
            </div>
          </div>

          <div className="Parent rounded-md p-10 bg-[#FBEDEC] ml-2 ring ring-[#f15968] ">

            <div className="flex justify-center ">
           
              
               
                <h2 className="text-3xl  text-center font-semibold text-rose-900 mb-3">
                  
                  Un Parent
                </h2>
             
            </div>
            <div className="ring ring-[#f15968] grid rounded-md bg-[white]  max-w-sm p-5">
            <img src={Parent} alt="/" className=" hidden  ld:flex ld:justify-self-center"></img>
            <h4>
                Un compte parent vous permet d'ajouter à vos favoris les
                différentes crèches disponibles et d'inscrire vos enfants. Vous
                pourrez alors réserver directement une place pour eux dans une
                crèche choisie ou prendre rendez-vous avec une crèche pour en
                savoir plus sur les disponibilités et les modalités
                d'inscription.
              </h4>
            </div>
          </div>
                </div>






          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 mx-auto sm:grid-cols-6 ">


            <div className="  sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Roles
              </label>
              <div className=" mt- ring-2 ring-red-400 rounded-md">
                <Select required   
                    onChange={(value) => setRole(value.value)}
                    options={roleoptions} 
                 />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-9">
          <h2 className="ml-2 mb-3 text-l font-semibold leading-7 text-blue-950">
            Mot de passe
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
              <div className="mt-2 grid">
                <input
                 id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> 
                  <p id="pwdnote" className={passwordFocus && password && !validPassword ? "instructions max-w-xs justify-self-center" : "offscreen"}>
                         Le mot de passe doit etre compose de 8 caracteres, une lettre majuscule,
                         une lettre miniscule et un chiffre.
                        </p>             
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="confirmpwd"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmez votre mot de passe
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="confirmpwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="pwdconfirm"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               <p id="pwdconfirm" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        Le mot de passe n'est pas identique
                        </p> 
           
                 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end ">
        <button
         
          disabled={false}
          className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sauvgarder
        </button>
      
      </div>
      <p ref={errRef} className={errMsg ? "errmsg mt-6" : "offscreen" }  aria-live="assertive">{errMsg}</p>
    </form>
    </section>)}
    </>
  );
}

export default Form;
