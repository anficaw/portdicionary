import Link from "next/link";
import styles from "./theheader.module.css";
import { link } from "fs";
import NavLinks from "../navlink/navlink";

export const TheHeader = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Learn",
      link: "/learn",
    },
  ];
  return (
    <header className={styles.main}>
      {links.map((item, index) => {
        return (
          <div key={index}>
            <NavLinks name={item.name} link={item.link}></NavLinks>
          </div>
        );
      })}
    </header>
  );
};
