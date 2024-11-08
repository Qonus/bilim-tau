"use client";

import styles from "./Profile.module.scss";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <p>{JSON.stringify(session)}</p>
      <h1>Hello, {session?.user?.name}</h1>
      <Image
        src={session?.user?.image as string}
        alt="profile picture"
        width={60}
        height={60}
      ></Image>
      <button onClick={() => signOut()}>Выйти</button>
    </>
  );
}
