import React from "react";
import { signIn } from "next-auth/react";
import styles from "./SignIn.module.scss";

export default function SignIn() {
  return (
    <>
      <div className={styles.signin_form}>
        <button
          className={styles.signin + " primary-button"}
          onClick={() => signIn("google")}
        >
          Войти с аккаунтом Google
        </button>
      </div>
    </>
  );
}
