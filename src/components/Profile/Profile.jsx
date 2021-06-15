import Posts from "./Posts/Posts";
import cn from "./Profile.module.css";

function Profile() {
  return (
    <div>
      <div className={cn.headerimage}>
        <img src="https://via.placeholder.com/650x100" alt="" />
      </div>
      <div>ava+description</div>
      <Posts />
    </div>
  );
}

export default Profile;
