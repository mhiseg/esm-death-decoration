import React, { FC } from "react";

interface FooterProps {
  text: string;
}

const Footer: FC<FooterProps> = ({ text }) => {
  return <div className="footer-miseg">{text}</div>;
};

export default Footer;
