import { signIn, useSession } from "next-auth/react";
import Profile from "../../../components/ProfileComponent/Profile";
import SignIn from "../../../components/SignInComponent/SignIn";

export default function ProfilePage() {
  return (
    <>
      <Profile />
    </>
  );
}
