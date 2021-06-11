import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import styles from "../../HeaderMobile/HeaderMobile.module.scss";

function NavLinkDesktop({ pathname, icon }) {
  const router = useRouter();
  if (router.pathname === pathname) {
    return (
      <a className={styles.active}>
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  } else {
    return (
      <Link href={pathname}>
        <a>
          <FontAwesomeIcon icon={icon} />
        </a>
      </Link>
    );
  }
}

export default NavLinkDesktop;
