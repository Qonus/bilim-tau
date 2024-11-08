"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <>
      <form
        action={async () => {
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
}
