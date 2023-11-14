import styles from "./Perpustakaan.module.css";

const Perpustakaan = () => {
  return (
    <div className={styles.perpustakaan}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/rectangle-10@2x.png" />
        <i className={styles.title}>Title</i>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/rectangle-10@2x.png" />
        <i className={styles.title}>Title</i>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/rectangle-10@2x.png" />
          <i className={styles.title}>Title</i>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild} />
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-10@2x.png"
            />
            <i className={styles.title}>Title</i>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.headerInner} />
        <img className={styles.headerChild1} alt="" src="/rectangle-7@2x.png" />
        <div className={styles.search}>Search</div>
        <div className={styles.profil}>Profil</div>
        <div className={styles.notifikasi}>Notifikasi</div>
        <div className={styles.perpustkaan}>Perpustkaan</div>
        <div className={styles.tulis}>Tulis</div>
      </div>
      <div className={styles.perpustakaan1}>Perpustakaan</div>
      <div className={styles.dibaca}>Dibaca</div>
      <b className={styles.diarsip}>Diarsip</b>
      <div className={styles.perpustakaanChild} />
      <div className={styles.perpustakaanItem} />
    </div>
  );
};

export default Perpustakaan;
