import styles from "./Homepage.module.scss";

export default async function Homepage() {
    return(
        <div className={styles.homepage}>
            <div className={styles.homepage_wrapper}>
                <p> Here will be some papers </p> 
            </div>
        </div>
    )
}