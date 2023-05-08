import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "./StepperContext";
import Account from "./steps/Account";
import Details from "./steps/Details";
import Connexion from "./steps/Connexion";
import Final from "./steps/Final";
import Login from "../../Login";

import Choice from "../../Choice";
import Authentification from "../../Authentification";

import Navbar from "../../Navbar";
import Footer from "../../HomePage/Footer";


function NwAccReservation() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Connexion",
    "Inscription",
    "Authentification",
    "Enfants",
    "Fin"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Connexion/>;
      
      case 2:
        return <Account />;
        case 3:
          return <Authentification />;
  
      case 4:
        return <Details />;
      
        case 5:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
   
      <div className="m-auto rounded-2xl ring ring-[#f43b57] bg-white pb-2   ">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-1 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    
      </>
  );
}

export default NwAccReservation;