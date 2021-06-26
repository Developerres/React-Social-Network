import React from "react";
import cn from "./Users.module.css";
import avatar from "../assets/images/avatar.svg";

const Users = (props) => {
  const numberOfPages = Math.ceil(props.totalCount / props.itemsCount);

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={cn.user}>
          <div className={cn.leftContent}>
            <div className={cn.userAvatar}>
              <img src={u.photos.small ? u.photos.small : avatar} alt="" />
            </div>
            <div className={cn.followBtn}>
              <button
                onClick={() =>
                  u.followed ? props.unfollow(u.id) : props.follow(u.id)
                }
              >
                {u.followed ? "Unfollow" : "Follow"}
              </button>
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
          if (el < props.currentPage + 2) {
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
          if (el > numberOfPages - 4 && el > props.currentPage) {
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
