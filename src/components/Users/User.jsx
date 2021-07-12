import React from "react";
import { NavLink } from "react-router-dom";
import cn from "./Users.module.css";
import avatar from "../../assets/images/avatar.svg";

const User = ({ user, followingInPogress, unfollow, follow }) => {
  return (
    <div className={cn.user}>
      <div className={cn.leftContent}>
        <div className={cn.userAvatar}>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small ? user.photos.small : avatar} alt="" />
          </NavLink>
        </div>
        <div className={cn.followBtn}>
          {user.followed ? (
            <button
              disabled={followingInPogress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInPogress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={cn.rightContent}>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>
    </div>
  );
};

export default User;
