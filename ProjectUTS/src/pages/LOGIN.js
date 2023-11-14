import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LOGIN.module.css";

const LOGIN = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
      <i className={styles.welcome}>WELCOME</i>
      <div className={styles.username}>Username</div>
      <div className={styles.password}>Password</div>
      <TextField
        className={styles.loginInner}
        color="primary"
        sx={{ width: 416 }}
        variant="outlined"
      />
      <TextField
        className={styles.rectangleTextfield}
        color="primary"
        sx={{ width: 416 }}
        variant="outlined"
      />
      <div className={styles.rectangleDiv} />
      <Link className={styles.login1} to="/beranda">
        LOGIN
      </Link>
    </div>
  );
};

export default LOGIN;
