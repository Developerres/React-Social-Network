import * as axios from "axios";
import React from "react";
import cn from "./Users.module.css";
import avatar from "../assets/images/avatar.svg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users/")
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id} className={cn.user}>
            <div className={cn.leftContent}>
              <div className={cn.userAvatar}>
                <img src={u.photos.small ? u.photos.small : avatar} alt="" />
              </div>
              <div className={cn.followBtn}>
                <button
                  onClick={() =>
                    u.followed
                      ? this.props.unfollow(u.id)
                      : this.props.follow(u.id)
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
      </div>
    );
  }
}

export default Users;
