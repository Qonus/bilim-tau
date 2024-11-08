"use client";

import styles from "./Profile.module.scss";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <h1>Hello, {session?.user?.name}</h1>
      <Image
        src={session?.user?.image!}
        alt="profile picture"
        width={60}
        height={60}
      ></Image>
      <button onClick={() => signOut()}>Выйти</button>
    </>
  );
}
