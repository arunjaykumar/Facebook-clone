import Post from "../Post/Post";
import Share from "../Share/Share";

import "./feeds.css";
function Feeds() {
  return (
    <div className="feedContainer">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default Feeds;
