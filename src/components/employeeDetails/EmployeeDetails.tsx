import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightArrow from "../../assets/images/right-angle.png";
import { Employee } from "../../interfaces/Employee";
import { getEmployeeById } from "../../services/employeeService";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./styles.module.css";

export default function EmployeeDetails() {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(Number(id));
      setEmployee(data);
    };
    
    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const summary = [
    {
      header: "Employee",
      key: "name" as keyof Employee,
      render: (name: string | number | boolean) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={employee?.url}
            alt="Employee"
            style={{ width: "28px", height: "28px", borderRadius: "50%" }}
          />
          <span>{name}</span>
        </div>
      ),
    },
    {
      header: "Role",
      key: "role" as keyof Employee,
    },
    { header: "E-Mail", key: "email" as keyof Employee },
    { header: "Phone", key: "phone" as keyof Employee },
  ];

  const date = [
    { header: "Start Date", key: "startDate" as keyof Employee },
  ];

  const status = [
    { 
      header: "Status",
      key: "active" as keyof Employee,
      render: () => (
        <label className="switch">
          <input type="checkbox" checked={Boolean(employee?.active)}/>
          <span className="slider round"></span>
        </label>
      )
    },
  ];

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
       <div className={styles.header}>
        <div>
          <p>Employees</p>
          <img src={RightArrow} width={16} height={16} alt="Right Arrow" />
          <p className={styles.employeeName}>{employee.name}</p>
        </div>
        <Button text="edit employee"/>
      </div>

      <div>
        <div>
          <Card title="summary" rows={summary} data={employee} />
        </div>
        <div className={styles.dateActiveContainer}>
          <Card title="date" rows={date} data={employee} fontSize={14}/>
          <Card title="active" rows={status} data={employee} fontSize={14}/>
        </div>
      </div>
    </div>
  );
}
