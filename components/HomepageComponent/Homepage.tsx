import styles from "./Homepage.module.scss";

export default async function Homepage() {
    return(
        <div className={styles.homepage}>
            <div className={styles.homepage_wrapper}>
                <p> Обменивайтесь уччебными материалами со школьниками со всего казахстана! </p> 
                <p> Ниже должны быть крч топ материалов как в казах пене </p> 
            </div>
        </div>
    )
}