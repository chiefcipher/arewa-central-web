import React from "react";
import { Icon } from "@iconify/react";
import styles from "./pagination.module.scss";
export function Pagination({
  currentPage,
  handleCurrentPage,
  increasePage,
  decreasePage,
}: {
  currentPage: number;
  decreasePage: () => void;
  increasePage: () => void;
  handleCurrentPage: (a: number) => void;
}) {
  console.log(Array({ length: currentPage }));

  const buttonsData = Array(currentPage > 3 ? currentPage + 2 : 3)
    .fill("x")
    .map((el, i) => ({ index: i }))
    .slice(-3);

  return (
    <div className={styles.pagination}>
      <button onClick={() => decreasePage()} disabled={currentPage === 1}>
        <Icon icon="ph:caret-left-bold" />
      </button>
      {buttonsData.map(({ index }) => (
        <button
          onClick={() => handleCurrentPage(index + 1)}
          key={index}
          style={{
            opacity: currentPage === index + 1 ? 1 : 0.4,
          }}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={() => increasePage()}>
        <Icon icon="ph:caret-right-bold" />
      </button>
    </div>
  );
}
