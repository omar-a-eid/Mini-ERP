import Header from "../components/header/Header";
import SideBar from "../components/navigation/SideBar";
export default function MainLayout() {
  return (
    <div style={{display: "flex"}}>
      <SideBar />

      <div style={{flex: 1}}>
        <Header />
        <div></div>
      </div>

    </div>
  )
}