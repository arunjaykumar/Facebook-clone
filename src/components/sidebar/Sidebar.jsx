import "./sidebar.css";
import {
  Bookmark,
  Chat,
  Group,
  QuestionAnswer,
  RssFeed,
  School,
  SlowMotionVideo,
  Work,
  Event,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarIconText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarIconText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <SlowMotionVideo className="sidebarIcon" />
            <span className="sidebarIconText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarIconText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarIconText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon" />
            <span className="sidebarIconText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarIconText">Work</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarIconText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarIconText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
        <li className="sidebarFriendItem">
          <img src="assets/person/2.jpeg" alt="imme" className="sidebarImg" />
          <span className="sidebarImgName">Arun Rana</span>
        </li>
      </div>
    </div>
  );
}
export default Sidebar;
