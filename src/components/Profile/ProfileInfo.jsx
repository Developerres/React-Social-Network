import cn from "./Profile.module.css";
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../assets/images/avatar.svg";

function ProfileInfo({ profile }) {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={cn.headerimage}>
        <img src="https://via.placeholder.com/650x100" alt="" />
      </div>
      <div className={cn.photoLarge}>
        <img
          src={profile.photos.large ? profile.photos.large : avatar}
          alt=""
        />
        <h2>{profile.fullName}</h2>
        <div>
          <p>{profile.aboutMe}</p>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
        <div>
          <h3>Contacts:</h3>
          <p> FB: {profile.contacts.facebook}</p>
          <p> website: {profile.contacts.website}</p>
          <p> vk: {profile.contacts.vk}</p>
          <p> twitter: {profile.contacts.twitter}</p>
          <p> instagram: {profile.contacts.instagram}</p>
          <p> youtube: {profile.contacts.youtube}</p>
          <p> github: {profile.contacts.github}</p>
          <p> mainLink: {profile.contacts.mainLink}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
