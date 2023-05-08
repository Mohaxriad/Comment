import React, {useEffect, useState} from "react";
import {EnfantUserx} from '../../../data';
import EnfantCard from './Enfantcard';
import useAuth from "../../../hooks/useAuth";

const Enfants = () => { 
    
  const { auth } = useAuth();
  const [enfants , setEnfants] = useState([]);
  let storeUser ;
  useEffect(() => {
    storeUser = JSON.parse(localStorage.getItem('user'));

    if (storeUser !== null) {
        setEnfants(storeUser.user.Enfant);
        console.log(storeUser.user.Enfant)
    }
  }
    ,[])


  const datacamp= enfants.map((data) => {

    return (
      <EnfantCard key={data.key} nom={data.nom} prenom={data.prenom} sexe={data.sexe} age={data.age} _id={data._id}/>
    )
  }) 

  
      return ( 
      <div className="w-full grid pio:grid-cols-2 ">
             {datacamp}
      </div>
            

          );
        };

 export default Enfants;
