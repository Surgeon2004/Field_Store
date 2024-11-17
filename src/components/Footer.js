import styles from "styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p  style={{ justifyContent: "center", textAlign:"center"}}>
        Made By:- <a href="https://github.com/Surgeon2004">Rishu Das</a> <a href="https://github.com/BaBa-Sampananda">Samprit Kamkamar</a>
      </p>
    </footer>
  );
};

export default Footer;