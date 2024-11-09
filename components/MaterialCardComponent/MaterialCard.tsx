import Image from "next/image";
import styles from "./MaterialCard.module.scss";
import Link from "next/link";

export default function MaterialCard({
  href,
  title = "",
  likes = 0,
  image = "/default_image.jpg",
  tags = ["Тэг Плейсхолдер", "Убрать тэги позже"]
}: {
  href: string;
  title?: string;
  likes?: number;
  image?: string;
  tags?: string[];
}) {
  return (
    <Link href={href} className={styles.material_card + " glass"} style={{textDecoration:'none'}}>
      <div className={styles.material_card__image_container}>
        <Image
          className={styles.material_card__image}
          src={image}
          width={600}
          height={300}
          alt="article image"
        />
      </div>
      
      <div className={styles.material_card__text}>
        <div className={styles.material_card__text__title}> <p> Заголовок </p> </div>
        <div className={styles.material_card__text__description}>
          <p>
            Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание  
          </p>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

        {tags.map((tag, index) => (
            <span key={index} style={{ padding: '5px 10px', backgroundColor: '#f1f1f1', borderRadius: '4px', fontSize: '14px' }}>
              <p> {tag} </p>
            </span>
          ))}
      </div>
      </div>

      
    </Link>
  );
}