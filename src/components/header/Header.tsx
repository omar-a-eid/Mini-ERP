import Bell from "../../assets/images/bell.png";
import DownArrow from "../../assets/images/black-down-arrow.png";
import Envelope from "../../assets/images/envelope.png";
import Icon from "./icon/Icon";
import styles from "./styles.module.css";

export default function Header() {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.infoContainer}>
          {/* Avatar */}
          <div className={styles.avatar}></div>
          {/* End of Avatar */}
          <div className={styles.infoWrapper}>
            <div>
               <span>mohamed kamal </span>
               <span><img src={DownArrow} width={12} height={12} alt="Down Arrow" /></span>
            </div>
            <div>admin</div>
          </div>
        </div>

        <Icon  image={Bell} notificationNumber="9" alt="Bell"/>
        <Icon  image={Envelope} notificationNumber="3" alt="Envelope"/>

      </div>
    </div>
  )
  
}