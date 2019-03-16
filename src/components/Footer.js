import React from "react"
import {
  FaGithub,
  FaTwitter,
  FaChevronUp,
} from "react-icons/fa";
import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer>
    <>
      <ul className={styles["social"]}>
        <li>
          <a href="https://twitter.com/BanditsByte">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/ByteBandits/">
            <FaGithub />
          </a>
        </li>
      </ul>

      <ul className={styles["copyright"]}>
        <li>© {new Date().getFullYear()}, ByteBandits</li>
      </ul>

      <div className={styles["gotop"]}>
        <a className={styles["smoothscroll"]} title="Back to Top" href="#top">
          <FaChevronUp />
        </a>
      </div>
    </>
  </footer>
);

export default Footer;
