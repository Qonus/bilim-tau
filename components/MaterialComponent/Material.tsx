import styles from "./Material.module.scss";
import React from "react";
import Image from "next/image";

export default function Material({
  title,
  created_at,
  description,
  author,
  author_profile,
}: {
  title: string;
  created_at: Date;
  description: string;
  author?: string;
  author_profile?: string;
}) {
  return (
    <div className={styles.material}>
      <div className={styles.material__wrapper}>
        <div className={styles.material__author}>
          От:{" "}
          <Image
            className={styles.material__author__profile}
            src={author_profile ?? "/default-profile.jpg"}
            alt="pfp"
            height={10}
            width={10}
          />
          {author ?? "Аноним"}
        </div>
        <div className={styles.material__title}>
          <p>{title}</p>
        </div>
        <div className={styles.material__dates}>
          был создан: {created_at.toDateString()}, Last Change:{" "}
        </div>
        <div className={styles.material__text}>
          <p> {description} </p>
        </div>
        <div className={styles.material__media + " glass"}></div>
      </div>
    </div>
  );
}
