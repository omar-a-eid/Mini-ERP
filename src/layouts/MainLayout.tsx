import Header from "../components/header/Header";
import SideBar from "../components/navigation/SideBar";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div style={{display: "flex"}}>
      <SideBar />

      <div style={{flex: 1}}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>

    </div>
  )
}