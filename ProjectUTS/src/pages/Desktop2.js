import { Button } from "@mui/material";
import styles from "./Desktop2.module.css";

const Desktop2 = () => {
  return (
    <div className={styles.desktop2}>
      <div className={styles.desktop2Child} />
      <img className={styles.profil2Icon} alt="" src="/profil-1@2x.png" />
      <img className={styles.profil1Icon} alt="" src="/profil-11@2x.png" />
      <img className={styles.profil3Icon} alt="" src="/profil-11@2x.png" />
      <div className={styles.desktop2Item} />
      <div className={styles.desktop2Inner} />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop2Child1} />
      <div className={styles.desktop2Child2} />
      <b className={styles.username}>@USERNAME</b>
      <div className={styles.name}>NAME</div>
      <div className={styles.name1}>NAME</div>
      <div className={styles.hello}>Hello!!!!!</div>
      <div className={styles.feb022025}>Feb 02, 2025 03:10 PM</div>
      <Button
        className={styles.perihal}
        sx={{ width: 139 }}
        color="warning"
        variant="contained"
      >
        Perihal
      </Button>
      <Button
        className={styles.post}
        sx={{ width: 91 }}
        color="warning"
        variant="outlined"
      >
        Post
      </Button>
      <div className={styles.karya}>
        <p className={styles.p}> 4</p>
        <p className={styles.p}>Karya</p>
      </div>
      <i className={styles.post1}>Post...</i>
      <div className={styles.kPengikut}>
        <p className={styles.p}> 1.1K</p>
        <p className={styles.p}>Pengikut</p>
      </div>
      <div className={styles.desktop2Child3} />
    </div>
  );
};

export default Desktop2;
