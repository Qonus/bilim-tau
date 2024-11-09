import Image from "next/image";
import styles from "./MaterialCard.module.scss";
import Link from "next/link";

export default function MaterialCard({
  href,
  title = "",
  description = "",
  likes = 0,
  tags = ["Тэг Плейсхолдер", "Убрать тэги позже"],
}: {
  href: string;
  title?: string;
  description?: string;
  likes?: number;
  tags?: string[];
}) {
  return (
    <Link
      href={href}
      className={styles.material_card + " glass"}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.material_card__text}>
        <div className={styles.material_card__text__title}> {title} </div>
        <div className={styles.material_card__text__description}>
          <p>{description}</p>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: "5px 10px",
                backgroundColor: "#59a6ff",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              <p> {tag} </p>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
