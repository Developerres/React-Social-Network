import React from "react";
import cn from "./Pagination.module.css";

export const Pagination = ({
  totalCount,
  itemsCount,
  currentPage,
  pageSelected,
}) => {
  const numberOfPages = Math.ceil(totalCount / itemsCount);
  return (
    <div className={cn.pagination}>
      {[...Array(numberOfPages).keys()].map((el) => {
        if (
          el === 0 ||
          el === numberOfPages - 1 ||
          el === currentPage - 2 ||
          el === currentPage - 1 ||
          el === currentPage
        ) {
          return (
            <button
              onClick={() => {
                pageSelected(el);
              }}
              className={currentPage === el + 1 ? cn.currentPage : ""}
              key={el}
            >
              {el + 1}
            </button>
          );
        }
      })}
    </div>
  );
};
