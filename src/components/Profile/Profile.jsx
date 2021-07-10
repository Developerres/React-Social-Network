import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileStatus from "../Profile/ProfileStatus";

function Profile(props) {
  return (
    <div>
      <ProfileStatus status={props.status} />
      <ProfileInfo profile={props.profile} />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
