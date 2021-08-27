import React, { useState } from "react";
import cn from "classnames";

import { Button } from "antd";

import style from "./Paginator.module.css";

export const Paginator = ({
  currentPage,
  totalItemCount,
  onPageChanged,
  pageSize,
  portionSize = 20,
}) => {
  let pagesCount = Math.ceil(totalItemCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);
  const portionCount = Math.ceil(pagesCount / pageSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <Button
          className={style.buttonPaginator}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </Button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              key={page}
              className={cn(style.pageNumber, {
                [style.selectedPage]: currentPage === page,
              })}
              onClick={(e) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <Button
          className={style.buttonPaginator}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </Button>
      )}
    </div>
  );
};
