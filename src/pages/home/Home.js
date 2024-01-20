import Feeds from "../../components/Feed/Feeds";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Home.css";
function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feeds />
        <Rightbar />
      </div>
    </>
  );
}
export default Home;
