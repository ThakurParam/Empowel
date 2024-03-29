import { ArrowBackIos, ArrowForward } from "@mui/icons-material";
import { List } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";
import React from "react";

export default function Pagination() {
  const { items, next, previous } = usePagination({
    count: 10,
  });
  return (
    <nav>
      <List>
        <li>
          <button type="button" onClick={previous}>
            <ArrowBackIos />
          </button>
        </li>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
        <li>
          <button type="button" onClick={next}>
            <ArrowForward />
          </button>
        </li>
      </List>
    </nav>
  );
}
