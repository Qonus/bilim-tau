"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  return <></>;
}
