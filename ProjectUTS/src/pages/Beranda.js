import { Link } from "react-router-dom";
import styles from "./Beranda.module.css";

const Beranda = () => {
  return (
    <div className={styles.beranda}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/rectangle-10@2x.png" />
      </div>
      <div className={styles.berandaChild} />
      <img className={styles.berandaItem} alt="" src="/rectangle-10@2x.png" />
      <div className={styles.berandaInner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10@2x.png" />
      <img className={styles.berandaChild1} alt="" src="/rectangle-10@2x.png" />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.headerInner} />
        <img className={styles.headerChild1} alt="" src="/rectangle-7@2x.png" />
        <div className={styles.search}>Search</div>
        <Link className={styles.profil} to="/profil">
          Profil
        </Link>
        <Link className={styles.notifikasi} to="/notif">
          Notifikasi
        </Link>
        <Link className={styles.perpustkaan} to="/perpustakaan">
          Perpustkaan
        </Link>
        <Link className={styles.tulis} to="/perpustakaan">
          Tulis
        </Link>
      </div>
      <img className={styles.berandaChild2} alt="" src="/rectangle-9@2x.png" />
    </div>
  );
};

export default Beranda;
