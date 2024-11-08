"use client";

import styles from "./Profile.module.scss";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "../SignInComponent/SignIn";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className={styles.profile}>
          <div className={styles.profile__info}>
            <Image
              src={session?.user?.image as string}
              alt="profile picture"
              width={80}
              height={80}
            ></Image>
            <div>
              <h1>Hello, {session?.user?.name}</h1>
              <h3>Email: {session?.user?.email}</h3>
            </div>
          </div>
          <button className="primary-button" onClick={() => signOut()}>
            Выйти
          </button>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}
