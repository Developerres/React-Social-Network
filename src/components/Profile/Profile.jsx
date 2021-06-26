import PostsContainer from "./Posts/PostsContainer";
import cn from "./Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
