import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import EmployeeDetails from './components/employeeDetails/EmployeeDetails'
import Employees from './components/employees/Employees'
import { initialEmployees } from './data/Employees'
import MainLayout from './layouts/MainLayout'
import { initializeLocalStorage } from './services/localStorageService'
function App() {

  useEffect(() => {
    initializeLocalStorage("employees", initialEmployees);
  }, [])
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={< Employees/>} />
              <Route path='/employee/:id' element={<EmployeeDetails />}/>
              <Route path="*" element={< Employees/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
