import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function Profile(props) {
  return (
    <div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <ProfileInfo profile={props.profile} />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
