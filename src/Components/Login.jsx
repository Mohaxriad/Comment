import React from "react";
import { useRef, useState, useEffect , useContext} from 'react';

import useAuth from '../hooks/useAuth';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import FloatingImage from './Functions/FloatingImage'
import AuthContext from "../context/AuthProvider";
import jwtDecode from 'jwt-decode';
const LOGIN_URL = '/auth';

const Login = () => {
  
 
  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');


useEffect(() => {
    emailRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [email, password])

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.post (LOGIN_URL ,
  JSON.stringify({email,password}),
  {
    headers: {'Content-Type':'application/json'},
    withCredentials:true 
  }    
    );
    //console.log(JSON.stringify(response?.data) );
    
 
  
   
    const {accessToken} = response?.data;
    const {user} = response?.data;
   
    setAuth({user,accessToken})
    localStorage.setItem('user', JSON.stringify({ user,accessToken }));
    setEmail('');
    setPassword('');
    
    navigate(from, { replace: true });
  }catch (err){
    if (!err?.response) {
      setErrMsg('No Server Response');
  } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
  } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
  } else {
      setErrMsg('Login Failed');
  }
  errRef.current.focus();
}

  }
 
  return (
    <>
      <section> 
       <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
       <div className=" max-w-[1240px] md:mt-[-80px] mx-auto grid md:grid-cols-2 md:items-center md:justify-center ">
        <div className="flex items-center justify-center">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto w-[80%] md:h-screen md:w-full lg:py-0">
            <div class="w-full bg-[#F5D5D5] rounded-xl ring ring-[#ff5b5b] shadow  md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class=" welcome text-xl font-normal  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  BIENVENUE !
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-semibold text-[#0B0C38] "
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)} 
                      value={email}
                      required
                      class="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-2xl block w-full p-2.5"
                      placeholder="nom@company.com"
                      ref={emailRef}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-semibold text-[#0B0C38]"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password}
                      placeholder="••••••••"
                      class="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-2xl block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-[#FD8C7D] rounded bg-gray-50 accent-[#FD8C7D]"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          className="font-semibold text-[#191A43]"
                        >
                          Se souvenir de moi
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-semibold text-[#191A43] hover:underline "
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <a
                      href="/"
                      class="text-sm font-semibold text-[#191A43] hover:underline "
                    >
                  <button
                    type="submit"

                    class="w-full text-[#191A42] bg-[#FD8C7D] ring ring-[#191A42] font-semibold rounded-2xl text-sm px-5 py-2.5 text-center shadow-[0px_3.27895px_3.27895px_rgba(0,0,0,0.25),inset_3.27895px_6.5579px_3.27895px_rgba(0,0,0,0.25)]  hover:scale-105 duration-300"
                  >
                     
                    Se connecter
                  </button>
                  </a>
                  <p class="text-sm text-center  text-[#152071]">
                    Vous n'avez pas de compte{" "}
                    <a
                      href="/Signup"
                      class="font-medium text-[#F16951] hover:underline "
                    >
                        Inscrivez-vous
                    </a>
                  </p>

                  
               
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden     md:flex md:flex-col  md:items-center     ">
          <FloatingImage />
        </div>
      </div>

     </section>
     </>
  );
};

export default Login;
     
