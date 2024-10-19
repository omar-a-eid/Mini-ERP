import { useEffect, useState } from "react";
import Search from "../../assets/images/search.png";
import { Employee } from "../../interfaces/Employee";
import { deleteEmployee, getEmployees } from "../../services/employeeService";
import Button from "../button/Button";
import Table from "../table/Table";
import { employeeColumns } from './employeeColumns';
import styles from "./styles.module.css";

export default function Employees() {

  const [employees, setEmployees] = useState<Employee[]>([]);
  
  const fetchEmployees= async ()=> {
    const data = await getEmployees();
    setEmployees(data);
  }
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete =  async(id: number) => {
    await deleteEmployee(id);
    fetchEmployees();
  }

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