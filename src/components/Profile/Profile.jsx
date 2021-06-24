import PostsContainer from "./Posts/PostsContainer";
import cn from "./Profile.module.css";

function Profile(props) {
  return (
    <div>
      <div className={cn.headerimage}>
        <img src="https://via.placeholder.com/650x100" alt="" />
      </div>
      <div>
        <img
          src="https://assets.vercel.com/image/upload/f_auto,c_limit,q_auto,w_96/front/home/new/sarah-2.png"
          alt=""
        />
        description
      </div>

      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
