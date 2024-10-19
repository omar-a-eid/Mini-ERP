import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Employees from './components/employees/Employees'
import MainLayout from './layouts/MainLayout'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={< Employees/>} />
              <Route path='/employee/:id'/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
