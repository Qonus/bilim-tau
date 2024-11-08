import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_wrapper}>
          <Link href="/" className={styles.navbar__header} style={{ textDecoration: 'none' }}>
            <Image
              className={styles.navbar__header__logo}
              src="/favicon.ico"
              width={50}
              height={50}
              alt="pen logo"
            />
            <h3>Placeholder</h3>
          </Link>
          <div className={styles.navbar__nav}>
            <li>
            </li>
            <li>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h4>Главная</h4>
              </Link>
            </li>
            <li>
              <Link href="/materials" style={{ textDecoration: 'none' }}>
                <h4>Материалы</h4>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className={styles.fake_navbar}></div>
    </>
  );
}
