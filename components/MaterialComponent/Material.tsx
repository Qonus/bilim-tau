import styles from "./Material.module.scss"
import React from 'react';
import Image from "next/image";

interface ArticleProps {
  title: string;
  image?: string;
  publish_date: Date;
  last_changed?: Date;
  content: string;
  author?: string;
  author_profile?:string;
}

const Material: React.FC<ArticleProps> = ({ title, image, publish_date, last_changed, content, author, author_profile }) => {
  return (
    <div className={styles.material}>
      <div className={styles.material__wrapper}> 
        <div className={styles.material__author}>
          От: <Image 
          className={styles.material__author__profile}
          src = {author_profile ?? "/default-profile.jpg"}
          alt="pfp"
          height={10}
          width={10}/>
          {author ?? "Аноним"}
        </div>
        <div className={styles.material__title}><p>{title}</p></div>
        <div className={styles.material__dates}>
          Published: {publish_date.toDateString()}, Last Change: {last_changed?.toDateString()}
        </div>
        <div className={styles.material__text}><p> {content} </p></div>
        <div className={styles.material__media + " glass"}>

        </div>
      </div>
    </div>
  );
};

export default Material;