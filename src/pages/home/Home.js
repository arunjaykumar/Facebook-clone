import Feeds from "../../components/feed/Feeds";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
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
