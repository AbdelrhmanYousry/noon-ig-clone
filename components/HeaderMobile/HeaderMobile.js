import React from "react";
import Link from "next/link";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import styles from "./HeaderMobile.module.scss";
import NavLinkMobile from "../Elements/NavLinkMobile/NavLinkMobile.js";

const HeaderMobile = () => {
  const router = useRouter();
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLinkMobile pathname="/" icon={faHome} />
        </li>
        <li>
          <NavLinkMobile pathname="/favorites" icon={faHeart} />
        </li>
      </ul>
    </div>
  );
};

export default HeaderMobile;
