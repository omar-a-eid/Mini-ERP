import DownArrow from "../../assets/images/down-arrow.png";
import Employee from "../../assets/images/employee.png";
import Logo from "../../assets/images/logo.png";
import PieChart from "../../assets/images/pie-chart.png";
import Settings from "../../assets/images/settings.png";
import Team from "../../assets/images/team.png";
import DropdownLink from "./dropdownLink/DropdownLink";
import NormalLink from "./normalLink/NormalLink";
import styles from "./styles.module.css";

export default function SideBar() {
  return (
    <nav className={styles.container}>
      <div>
        <div className={styles.imageContainer}>
          <img src={Logo} height={75.29} width={122} alt="ERP Dash" />
        </div>

        <div className={styles.linksContainer}>
          <NormalLink image={PieChart} path="/dashboard"  text="Dashboard" alt="pie chart"/>
          <NormalLink image={Team} path="/teams"  text="Teams" alt="team"/>
          <NormalLink image={Employee} path="/employees"  text="Employees" alt="A person" active={true}/>
          <DropdownLink image={Settings} downArrow={DownArrow} text="Settings" alt="settings"/>
        </div>

      </div>
    </nav>
  )
}