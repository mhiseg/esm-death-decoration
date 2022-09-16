import React, { FC } from "react";
import styles from "../decoration/style.scss";

interface FooterProps {
  text: string;
}

const Footer: FC<FooterProps> = ({ text }) => {
  return <div className={styles.footer_mhiseg}>{text}</div>;
};

export default Footer;
