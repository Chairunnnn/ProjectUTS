import styles from "./Notif.module.css";

const Notif = () => {
  return (
    <div className={styles.notif}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.headerInner} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div className={styles.search}>Search</div>
        <div className={styles.profil}>Profil</div>
        <div className={styles.notifikasi}>Notifikasi</div>
        <div className={styles.perpustkaan}>Perpustkaan</div>
        <div className={styles.tulis}>Tulis</div>
      </div>
      <div className={styles.notifikasi1}>
        <div className={styles.notifikasiChild} />
        <div className={styles.useraMemberiVote}>
          UserA memberi vote pada cerita Anda
        </div>
        <div className={styles.notifikasiItem} />
      </div>
      <div className={styles.notifikasi2}>
        <div className={styles.notifikasiChild} />
        <div className={styles.useraMemberiVote}>
          UserA memberi vote pada cerita Anda
        </div>
        <div className={styles.notifikasiItem} />
        <div className={styles.notifikasi3}>
          <div className={styles.notifikasiChild} />
          <div className={styles.useraMemberiVote}>
            UserA memberi vote pada cerita Anda
          </div>
          <div className={styles.notifikasiItem} />
          <div className={styles.notifikasi4}>
            <div className={styles.notifikasiChild} />
            <div className={styles.useraMemberiVote}>
              UserA memberi vote pada cerita Anda
            </div>
            <div className={styles.notifikasiItem} />
            <div className={styles.notifikasi5}>
              <div className={styles.notifikasiChild} />
              <div className={styles.useraMemberiVote}>
                UserA memberi vote pada cerita Anda
              </div>
              <div className={styles.notifikasiItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
