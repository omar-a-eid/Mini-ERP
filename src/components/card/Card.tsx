import { CardProps } from "../../interfaces/CardProps";
import styles from "./styles.module.css";

export default function Card<T extends object>({ title, rows, data, fontSize }: CardProps<T>) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        <p>{title}</p>
      </div>
      {rows.map((row, index) => (
        <div key={index} className={styles.cardInfoContainer}>
          <div className={styles.rowHeader} style={{fontSize: `${fontSize}px`}}>{row.header}</div>
          <div>
            {row.render?
             row.render(data[row.key]):
             String(data[row.key])
             }
          </div> 
        </div>
      ))}
    </div>
  );
}
