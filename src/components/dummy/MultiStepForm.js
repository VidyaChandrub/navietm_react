import React, { useState } from 'react';
import Step1 from '../Settings';
import Step2 from '../Navigation';
import Step3 from '../Publish';
import Step4 from '../Exportpdf';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../TabsForm.css';
import { BsDiagram3 } from "react-icons/bs";
import { TbSettingsStar } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiFilePdf2Fill } from "react-icons/ri";

const MultiStepForm = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleTabClick = (step) => {
    setCurrentStep(step);
  };

  return (

      <div className='tab-container'>
      <div className="tabs">
        <button className={currentStep === 1 ? 'active-tab' : ''} onClick={() => handleTabClick(1)}> <TbSettingsStar size={20}/> SETTING</button>
        <button className={currentStep === 2 ? 'active-tab2' : 'navigation_btn'} onClick={() => handleTabClick(2)}> <BsDiagram3 size={20}/> NAVIGATION</button>
        <button className={currentStep === 3 ? 'active-tab3' : 'publish_btn'} onClick={() => handleTabClick(3)}> <MdOutlinePublishedWithChanges size={20}/> PUBLISH </button>
        <button className={currentStep === 4 ? 'active-tab4' : 'export_pdf'} onClick={() => handleTabClick(4)}><RiFilePdf2Fill size={20}/> EXPORT PDF</button>
      </div>
      <div className="card-container">
      <div className={currentStep ? 'card' : ''}>
        {currentStep === 1 && 
        <div className="card-one">
        <Step1 onPrev={handlePrev} onNext={handleNext}/>
        </div>
        }
        {currentStep === 2 && 
        <div className="card-nav">
        <Step2  onNext={handleNext} onPrev={handlePrev}/>
        </div>
        }
        {currentStep === 3 &&
        <div className="card-publish">
        <Step3  onNext={handleNext} onPrev={handlePrev}/>
        </div>
}
        {currentStep === 4 && 
        <div className="card-pdf">
          <Step4 />
        </div>
        }
      </div>
      </div>  
    </div>
  );
};

export default MultiStepForm;
