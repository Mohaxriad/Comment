import {Fragment, useEffect, useState} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import LOGO from "./Assets/LOGO (1).svg";
import Home from "./HomePage/Home";
import useAuth from "../hooks/useAuth"
import useLogout from "../hooks/useLogout";
import axios from "../api/axios";

import { Link, useNavigate } from "react-router-dom";
import { users } from "../data";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




export default function Navbar() {
  let [navgi,setnavgi]=useState([
    { name: "Connexion", href:'/Login', current:false },
    { name: "S'inscrire", href:'/Signup' , current: false },
    { name: "Rechercher", href: "", current: false },
    { name: "A propos de nous", href: "/AboutUs", current: false },
  ] );
  const [loggedin,SetLoggedin] = useState(false)
  const PARENT = "parent"
  const PROP = "proprietaire"

  let storeUser;
  useEffect(()=>{
    storeUser=JSON.parse(localStorage.getItem('user'))

    if(storeUser!=null)
    {
      SetLoggedin(true)
      if(storeUser.user.roles===PARENT){
        setnavgi ([
          { name: "Mes Enfants", href:'/MesEnfants' , current: false },
          { name: "Rechercher", href: "", current: false },
          { name: "A propos de nous", href: "#", current: false },
        ] )
      }else{
        setnavgi ([
          { name: "Mes Enfants", href: "/MesEnfants", current: false },
          { name: "Mes Creches", href: "/MesCreches", current: false },
          { name: "Rechercher", href: "", current: false },
          { name: "A propos de nous", href: "#", current: false },
        ])

      }


    }


  },[])

  const navigation=navgi;
  const login = loggedin ;

  const navigate = useNavigate();
const logout = useLogout();

const signOut = async () => {
  await logout();
  localStorage.removeItem('user');
  SetLoggedin(false)
  window.location.reload();
  window.location.href='/'
}




  return (
    <Disclosure as="nav" className="bg-[#FBEDEC]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 ld:px-8 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center ld:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center ld:items-stretch ld:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 <a href='/'>
                    <img src={LOGO} width="160px" alt="logo"></img>
                    </a>
                </div>
                <div className="hidden ld:ml-6 ld:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-red-400 px-1 text-white hover:bg-rose-900 ring-2 ring-[#fe2e2a]"
                            : "text-blue-950 hover:bg-red-400 hover:text-white ",
                          "rounded-md  px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : true}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* MENU PROFIL A DROITE */}   
           
               < div className={ login ? "flex absolute inset-y-0 right-0  items-center pr-2 sm:static ld:inset-auto ld:ml-6 ld:pr-0"  : "hidden"  } >
            
               <button
                  type="button"
                  className="rounded-full bg-red-400 p-1 text-rose-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-950"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {
                        /* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */
                        <UserCircleIcon
                          className="h-9 w-9 text-gray-300"
                          aria-hidden="true"
                        />
                      }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to='/MonProfil'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:text-blue-950"
                            )}
                          >
                            Mon profil
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="target_blank"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Parametres
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                         
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                           <button onClick={signOut} >Deconnexion</button> 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>  
            </div>
          </div>

          <Disclosure.Panel className=" ld:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-rose-900 text-white"
                      : "text-blue-950 hover:bg-red-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
