import cn from "./Profile.module.css";
import Preloader from "../common/Preloader/Preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={cn.headerimage}>
        <img src="https://via.placeholder.com/650x100" alt="" />
      </div>
      <div>
        <img src={props.profile.photos.large} alt="" />
        <h2>{props.profile.fullName}</h2>
        <div>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>
        <div>
          <h3>Contacts:</h3>
          <p> FB: {props.profile.contacts.facebook}</p>
          <p> website: {props.profile.contacts.website}</p>
          <p> vk: {props.profile.contacts.vk}</p>
          <p> twitter: {props.profile.contacts.twitter}</p>
          <p> instagram: {props.profile.contacts.instagram}</p>
          <p> youtube: {props.profile.contacts.youtube}</p>
          <p> github: {props.profile.contacts.github}</p>
          <p> mainLink: {props.profile.contacts.mainLink}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
