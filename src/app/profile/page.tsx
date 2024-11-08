import Image from "next/image";
import styles from "./page.module.css";

import { signIn, useSession } from "next-auth/react";
import Profile from "../../../components/ProfileComponent/Profile";
import SignIn from "../../../components/SignInComponent/SignIn";

export default function Home() {
  const { data: session } = useSession();
  return <>{session ? <Profile /> : <SignIn />}</>;
}
