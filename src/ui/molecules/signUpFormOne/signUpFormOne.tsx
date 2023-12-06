import React, { useContext } from "react";
import styles from "./signUpFormOne.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { E_pages } from "../../../typescript/enums";
import UserImg from "./user.svg";
import BusinessImg from "./brief-case.svg";
import { RightArrowSvg } from "../../../shared/assets";
import { SignUpContext } from "../../pages/signUp/signUpContext";
export function SignUpFormOne() {
  const { signUpData, setSignUpData } = useContext(SignUpContext);
  const navigate = useNavigate();
  return (
    <div className={styles.formOne}>
      <div className={styles.header}>
        <span>Already have an account?</span>
        <Link to={E_pages.login}> Login</Link>
      </div>

      <div className={styles.prompt}>
        <h2>Join Us!</h2>
        <p>
          To begin this joining, tell us what type of account you will be
          opening.
        </p>
      </div>
      <div className={styles.formArea}>
        <button
          onClick={() => {
            setSignUpData({
              ...signUpData,
              role: "user",
            });
            navigate("personal-info");
          }}
        >
          <img src={UserImg} alt="Individual" />
          <p>
            <span>Individual</span>
            <span>Personal Account to manage all your activities</span>
          </p>
          <img src={RightArrowSvg} alt="continue arrow" />{" "}
        </button>
        <button disabled title="Coming soon">
          <img src={BusinessImg} alt="Individual" />
          <p>
            <span>Business</span>
            <span>
              Own or belong to a company, this is for you...Coming soon
            </span>
          </p>
          <img src={RightArrowSvg} alt="continue arrow" />{" "}
        </button>
      </div>
    </div>
  );
}
