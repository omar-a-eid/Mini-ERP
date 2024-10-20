import Plus from "../../assets/images/plus.png";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  width?: number;
  btnType?: "blue" | "gray";
  addBtn?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

export default function Button({text, width = 137, btnType ="blue", addBtn = false, onClick}: ButtonProps) {
  return (
    <div  className={btnType == "blue" ?styles.blueBtn : styles.grayBtn} style={{width: `${width}px`}} onClick={onClick}>
        {
        addBtn &&
        <img src={Plus} width={24} height={24} alt="Plus sign" />
        }
        {text}
    </div>
  )
}