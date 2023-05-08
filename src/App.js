import React from 'react';


import { Routes, Route } from 'react-router-dom';

import PageLogin from './Components/PageLogin';

import Home from './Components/HomePage/Home';

import SignUp from './Components/SignUp'
import MonProfil from './Components/UTILISATION/Profil/MonProfil';
import RequireAuth from './Components/RequireAuth';
import MesCreches from './Components/UTILISATION/PagesProprio/Creches/MesCreches';
import MesEnfants from './Components/UTILISATION/Enfants/MesEnfants'
import Unauthorized from './Components/Unauthorized';
import PersistLogin from './Components/PersistLogin';
import FormEnfant from './Components/UTILISATION/Enfants/FormEnfant';
import AboutUs from './Components/AboutUs/AboutUs';



const PARENT = 'parent'
const PROP = 'proprietaire' 

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Unauthorized' element={<Unauthorized />} />
        <Route path="/Login" element={<PageLogin />} />
        <Route path='/Signup' element={<SignUp />} />

        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/FormEnfant'  element={<FormEnfant/>}/>
        <Route path='/MesEnfants' element={<MesEnfants />} />
        <Route path='/MonProfil' element={<MonProfil />} />
     


        <Route element={<PersistLogin />} >

        </Route>


          <Route element={<RequireAuth allowedRoles={[PROP, PARENT]} />} >

          </Route>

          <Route element={<RequireAuth allowedRoles={[PROP]} />} >
          <Route path='/MesCreches' element={<MesCreches />} />
          </Route>





      </Routes>



    </>
  );
}

export default App;
