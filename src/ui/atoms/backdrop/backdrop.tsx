import React from "react";
import styles from "./backdrop.module.scss";
export const Backdrop = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.backdrop}>{children}</div>
);
