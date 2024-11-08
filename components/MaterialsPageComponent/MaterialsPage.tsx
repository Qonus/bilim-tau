"use client";
import styles from "./MaterialsPage.module.scss";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "../SignInComponent/SignIn";
import Link from "next/link";

export default function MaterialsPage() {
  const { data: session } = useSession();
  return (
    <>
      <div className={styles.materialspage}>
        {session ? (
          <div>
            <Link className={styles.addpost} href="/post">
              <Image
                src="/add-circle.svg"
                alt="add"
                width={30}
                height={30}
              ></Image>
              Выложить материал
            </Link>
          </div>
        ) : (
          <SignIn />
        )}
        <div className={styles.results}>
          <div className={styles.results_wrapper}>
            Place for articles and searching
          </div>
        </div>
      </div>
    </>
  );
}
