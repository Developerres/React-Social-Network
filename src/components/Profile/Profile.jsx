import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function Profile({ status, updateStatus, profile, store }) {
  return (
    <div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <ProfileInfo profile={profile} />
      <PostsContainer store={store} />
    </div>
  );
}

export default Profile;
