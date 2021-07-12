import React from "react";
import { Pagination } from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
  currentPage,
  pageSelected,
  totalCount,
  itemsCount,
  users,
  followingInPogress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInPogress={followingInPogress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        pageSelected={pageSelected}
        totalCount={totalCount}
        itemsCount={itemsCount}
      />
    </div>
  );
};

export default Users;
