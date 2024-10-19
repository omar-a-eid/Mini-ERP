import styles from "./styles.module.css";
interface IconProps {
  image: string;
  notificationNumber: string;
  alt: string;
}

export default function Icon({image, notificationNumber, alt}: IconProps) {

  return (
    <div className={styles.iconContainer}>
      <div className={styles.number}>{notificationNumber}+</div>
      <img src={image} width={19.98} height={20} alt={alt} />
    </div>
  )
  
}