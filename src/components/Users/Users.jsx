import React from "react";
import { NavLink } from "react-router-dom";
import cn from "./Users.module.css";
import avatar from "../../assets/images/avatar.svg";

const Users = (props) => {
  const numberOfPages = Math.ceil(props.totalCount / props.itemsCount);

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={cn.user}>
          <div className={cn.leftContent}>
            <div className={cn.userAvatar}>
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small ? u.photos.small : avatar} alt="" />
              </NavLink>
            </div>
            <div className={cn.followBtn}>
              {u.followed ? (
                <button
                  disabled={props.followingInPogress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInPogress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={cn.rightContent}>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        </div>
      ))}

      <div className={cn.pagination}>
        {[...Array(numberOfPages).keys()].map((el) => {
          if (
            el === 0 ||
            el === numberOfPages - 1 ||
            el === props.currentPage - 2 ||
            el === props.currentPage - 1 ||
            el === props.currentPage
          ) {
            return (
              <button
                onClick={() => {
                  props.pageSelected(el);
                }}
                className={props.currentPage === el + 1 ? cn.currentPage : ""}
                key={el}
              >
                {el + 1}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Users;
