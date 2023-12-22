import { Link } from "react-router-dom";
import styles from "./emptyOrderUI.module.scss";
import { Icon } from "@iconify/react";
import { E_Pages } from "../../../typescript/enums";
export function EmptyOrderUI() {
  return (
    <div className={styles.empty}>
      <Icon icon="material-symbols:error" />

      <>
        <h3>No order made</h3>
        <p>
          You have not made any order yet, make an{" "}
          <Link to={E_Pages.home}>order</Link> to see it here
        </p>
      </>
    </div>
  );
}
