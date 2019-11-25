import React from "react";
import styles from "./styles.module.css";

const Panel = ({ layout = "v", children }) => {
  return <div className={styles.panel}>{children}</div>;
};

export { Panel as default };
