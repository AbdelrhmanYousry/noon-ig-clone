import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../HeaderDesktop/HeaderDesktop.module.scss";

function NavLinkDesktop({ pathname, title }) {
  const router = useRouter();
  if (router.pathname === pathname) {
    return <a className={styles.active}>{title}</a>;
  } else {
    return (
      <Link href={pathname}>
        <a>{title}</a>
      </Link>
    );
  }
}

export default NavLinkDesktop;
