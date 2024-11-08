import styles from "./Homepage.module.scss";
import MaterialCard from "../MaterialCardComponent/MaterialCard";

export default async function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_wrapper}>
        <div className={styles.homepage__hero_section}>
          <p>
            Обменивайтесь учебными материалами со школьниками со всего
            казахстана!
          </p>
          <p> Ниже должны быть крч топ материалов как в казах пене </p>
        </div>
        <MaterialCard
          href="/materials/1"
          title="placeholder"
          likes={10}
          image="public/vercel.svg"
        />
      </div>
    </div>
  );
}
