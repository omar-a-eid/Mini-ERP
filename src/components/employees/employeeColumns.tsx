import Active from "../../assets/images/active.png";
import Inactive from "../../assets/images/inactive.png";
import trash from "../../assets/images/trash.png";
import { Employee } from "../../interfaces/Employee";

export const employeeColumns = (handleDelete: (id: number) => void) => [
  { 
    header: 'Employee',
    key: 'name' as keyof Employee,
    render:(row: Employee) => (
      <td key={row.id + 'a'}>
        <a href={`/employee/${row.id}`} style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <div style={{background: `url(${row.url})`, backgroundSize: "cover", backgroundPosition:"center", width: "28px", height: "28px", borderRadius: "50%"}}></div>
          <div>{row.name}</div>
        </a>
      </td>
    )
  },
  { header: 'Role', key: 'role' as keyof Employee },
  { header: 'E-Mail', key: 'email' as keyof Employee },
  { header: 'Phone', key: 'phone' as keyof Employee },
  { header: 'Start Date', key: 'startDate' as keyof Employee },
  { 
    header: 'Active', 
    key: 'active' as keyof Employee,
    render: (row: Employee) => (
      <td key={row.id + 'b'}>
        <img src={row.active ? Active : Inactive} width={34} height={24}/>
      </td>
    )
  },
  { 
    header: '',
    key: 'id' as keyof Employee,
    render: (row: Employee) => (
      <td key={row.id}>
        <img src={trash} width={24} height={24} alt="Trash can" onClick={() => handleDelete(row.id)} style={{cursor: "pointer"}}/>
      </td>
    )
  },
];
