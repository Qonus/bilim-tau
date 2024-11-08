import styles from "./Homepage.module.scss";
import MaterialCard from "../MaterialCardComponent/MaterialCard";
import Image from "next/image";

export default async function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_wrapper}>
        <div className={styles.homepage__about_us_section + " glass"}>
          <Image
            className={styles.homepage__about_us_section__image}
            src="/bilim-tau-icon.png"
            alt=""
            width={300}
            height={300}
          />
          <div className={styles.homepage__about_us_section__text}>
            <div className={styles.homepage__about_us_section__text__header}>
              <p>О нас</p>
            </div>
            <div className={styles.homepage__description}>
              <p>Добро пожаловать на наш сайт, созданный для удобного обмена учебными материалами между школьниками! Здесь вы найдете конспекты, заметки и другие ресурсы, которые помогут лучше понять школьную программу. Благодаря удобному поиску по тегам и названиям нужные материалы всегда легко доступны. Мы верим, что сотрудничество и поддержка друг друга делают учебу проще и интереснее. Один конспект для всех, и все конспекты для одного!</p>
            </div>
          </div>
        </div>

        <div className={styles.homepage__top_articles}>
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/Raiden_Background.jpg"
        />
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/vergil_background.jpg"
        />
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/vergil_background.jpg"
        />
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/vergil_background.jpg"
        />
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/vergil_background.jpg"
        />
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="/vergil_background.jpg"
        />

        </div>
        
      </div>
    </div>
  );
}
