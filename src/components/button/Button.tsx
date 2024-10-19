import Plus from "../../assets/images/plus.png";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  width?: number;
  btnType?: string;
  addBtn?: boolean;
}

// height 48
export default function Button({text, width = 137, btnType ="blue", addBtn = false}: ButtonProps) {
  return (
    <div  className={btnType == "blue" ?styles.blueBtn : styles.grayBtn} style={{width: `${width}px`}}>
        {
        addBtn &&
        <img src={Plus} width={24} height={24} alt="Plus sign" />
        }
        {text}
    </div>
  )
}