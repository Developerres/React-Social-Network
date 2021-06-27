import React from "react";
import { NavLink } from "react-router-dom";
import cn from "./Users.module.css";
import avatar from "../assets/images/avatar.svg";
import axios from "axios";

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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7e0c9ba9-cd28-4dd6-9805-c27ff39f8d4e",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7e0c9ba9-cd28-4dd6-9805-c27ff39f8d4e",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
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
