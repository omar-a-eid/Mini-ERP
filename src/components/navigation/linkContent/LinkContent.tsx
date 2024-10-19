import styles from "./styles.module.css";

interface LinkProps {
  image:     string; 
  text:      string;
  alt:       string;
  downArrow?:    string;
}
export default function linkContent({image, text, alt, downArrow}: LinkProps) {
  return (
    <div>
        <div className={styles.linkContent}>
          <div>
            <img src={image} height={24} width={24} alt={alt} />
          </div>
          <div>{text}</div>
          {
          downArrow && 
          <div className={styles.arrowContainer}>
            <img src={downArrow} height={16} width={16} alt="down arrow"/>
          </div>
          }
        </div>

    </div>
  )
}