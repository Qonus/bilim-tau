"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import styles from "./SignIn.module.scss";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <>
      <div className={styles.signin_form}>
        <form
          action={async () => {
            await signIn("google");
          }}
        >
          <button className={styles.signin} type="submit">
            Войти с аккаунтом Google
          </button>
        </form>
      </div>
    </>
  );
}
