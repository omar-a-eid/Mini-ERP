import Search from "../../assets/images/search.png";
import { Employee } from "../../interfaces/Employee";
import Button from "../button/Button";
import Table from "../table/Table";
import { employeeColumns } from './employeeColumns';
import styles from "./styles.module.css";

export default function Employees() {
  
  const handleDelete = (id: number) => {
    console.log(id);
  }

  const employees: Employee[] = [
    { 
      id: 1, name: 'John Doe', position: 'Software Engineer', salary: 90000, 
      hiredAt: '2020-03-15', email: 'john@example.com', phone: '123-456-7890', 
      startDate: '2020-03-15', active: true, url: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
    },
    { 
      id: 2, name: 'Jane Smith', position: 'Project Manager', salary: 120000, 
      hiredAt: '2018-06-20', email: 'jane@example.com', phone: '098-765-4321', 
      startDate: '2018-06-20', active: false, url: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
    },
    // Add more employees
  ];

  const columns = employeeColumns(handleDelete);

  return (
    <div style={{marginLeft: "20px"}}>
      <div>
        <h1>Employees</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.searchAddContaienr}>
          <div className={styles.searchContainer}>
            <img src={Search} width={24} height={24} alt="Search icon" />
            <input type="search" name="search" id="search" placeholder="search employees"/>
          </div>
          <div>
            <Button text="new employees" addBtn={true} width={192}/>
          </div>
        </div>

        <Table columns={columns} data={employees}/>
      </div>
    </div>
  )
}