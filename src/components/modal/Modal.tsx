import { useState } from "react";
import ModalProps from "../../interfaces/Modal";
import Button from "../button/Button";
import CircleStep from "../circleStep/CircleStep";
import styles from "./styles.module.css";

export default function Modal({isOpen, onClose, title, steps, step1Valid, step2Valid, onSubmit}: ModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  if(!isOpen) return null;

  const nextStep = () => {
    if (currentStep === 0 && step1Valid?.()) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 1 && step2Valid?.()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0 ) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.headerContainer}>
            <p>{title}</p>

            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
          </div>

          <div className={styles.stepsContainer}>
            <CircleStep text="personal data" active={currentStep == 0? true: false}/>
            <div className={styles.dashedLine}></div>
            <CircleStep text="image" active={currentStep == 1? true: false}/>
            <div className={styles.dashedLine}></div>
            <CircleStep text="preview" active={currentStep == 2? true: false}/>
          </div>

          <div className={styles.stepsContentContainer}>
            {steps[currentStep].content}
          </div>

          <div className={styles.btnsContainer} style={currentStep > 0 ? {justifyContent: "space-between"} : {justifyContent: "flex-end"}}>
            {currentStep > 0 && <Button text="back" btnType="gray" onClick={previousStep}/>}
            
            {currentStep < steps.length - 1 ? (
              <Button text="next" onClick={nextStep}/>
            ) : (
              <Button text="apply" onClick={onSubmit}/>
            )}  

          </div>
        </div>
      </div>
      <div className={styles.active} onClick={onClose}></div>
    </>
  )
}