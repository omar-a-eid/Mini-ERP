import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/navigation/SideBar";
export default function MainLayout() {
  return (
    <div style={{display: "flex", height: "100%"}}>
      <SideBar />

      <div style={{width: "calc(100% - 255px)"}}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>

    </div>
  )
}