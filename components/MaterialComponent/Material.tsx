import styles from "./Material.module.scss"
import React from 'react';
import Image from "next/image";

interface ArticleProps {
  title: string;
  image?: string;
  publish_date: Date;
  last_changed?: Date;
  content: string;
}

const Material: React.FC<ArticleProps> = ({ title, image, publish_date, last_changed, content }) => {
  return (
    <div className={styles.material}>
      <div className={styles.material__wrapper}> 
        <div className={styles.material__title}><p>{title}</p></div>
          <Image 
          className={styles.material__image}
          src="/Users/gulmiraamangeldiyeva/Desktop/bilim-tau/src/app/favicon.ico" //i could nate place "{image}" in there(
          alt="Титуальное изображение" 
          width={500}
          height={500}/>
          <div>
            <p><strong>Published:</strong> {publish_date.toLocaleDateString()}</p>
            {last_changed && <p><strong>Last Updated:</strong> {last_changed.toLocaleDateString()}</p>}
          </div>
        <div>{content}</div>
      </div>
      
    </div>
  );
};

export default Material;