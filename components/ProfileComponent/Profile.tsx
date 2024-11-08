"use client";

import styles from "./Profile.module.scss";
import React from "react";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return <></>;
}
