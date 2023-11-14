import { Button } from "@mui/material";
import styles from "./Profil.module.css";

const Profil = () => {
  return (
    <div className={styles.profil}>
      <div className={styles.profilChild} />
      <img className={styles.profil1Icon} alt="" src="/profil-1@2x.png" />
      <div className={styles.profilItem} />
      <div className={styles.profilInner} />
      <Button className={styles.rectangleButton} />
      <Button
        className={styles.profilChild1}
        sx={{ width: 170 }}
        color="warning"
        variant="contained"
      />
      <div className={styles.rectangleDiv} />
      <b className={styles.username}>@USERNAME</b>
      <div className={styles.name}>NAME</div>
      <Button
        className={styles.perihal}
        sx={{ width: 139 }}
        color="warning"
        variant="contained"
      >
        Perihal
      </Button>
      <div className={styles.post}>Post</div>
      <div className={styles.karya}>
        <p className={styles.p}> 4</p>
        <p className={styles.p}>Karya</p>
      </div>
      <div className={styles.kPengikut}>
        <p className={styles.p}> 1.1K</p>
        <p className={styles.p}>Pengikut</p>
      </div>
      <div className={styles.hiImHereContainer}>
        <p className={styles.p}>Hi!!!!</p>
        <p className={styles.p}>I’m Here!!!</p>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv} />
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
        <div className={styles.profil1}>Profil</div>
        <div className={styles.notifikasi}>Notifikasi</div>
        <div className={styles.perpustkaan}>Perpustkaan</div>
        <div className={styles.tulis}>Tulis</div>
      </div>
    </div>
  );
};

export default Profil;
