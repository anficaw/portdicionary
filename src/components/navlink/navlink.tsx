"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./navlink.module.css";

type Tprops = {
  name: string;
  link: string;
};

export default function NavLinks({ name, link }: Tprops) {
  const pathname = usePathname();

  return (
    <>
      <Link
        key={name}
        href={link}
        className={clsx(`${styles.activenot}`, {
          [`${styles.active}`]: pathname === link,
        })}
      >
        {name}
      </Link>
    </>
  );
}

/*className={clsx(`${styles.activenot}`, {
  "`${styles.activenot}`": pathname === link,
})}*/
