import { MoreVert } from "@mui/icons-material";
import "./post.css";
function Post() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">Jone Doe</span>
            <span className="postDate">2 minut ago.</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hye! This is my first Post </span>
          <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon" />
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">100 people like it</span>
          </div>
          <div className="postBottomRight">9 comments</div>
        </div>
      </div>
    </div>
  );
}
export default Post;
