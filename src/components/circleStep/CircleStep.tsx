import CircleStepProps from "../../interfaces/CircleStepProps";
import styles from "./styles.module.css";

export default function CircleStep({text, active}: CircleStepProps)  {
  return (
    <div className={active? styles.ActiveCircle: styles.circle}>
      <div></div>
      <p>{text}</p>
    </div>
  )
}