import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCenter">
        <span className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or videos"
            className="searchInput"
          />
        </span>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBage">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBage">2</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBage">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
export default Topbar;
