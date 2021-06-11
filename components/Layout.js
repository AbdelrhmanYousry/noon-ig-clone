import React from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import styles from "../styles/Home.module.scss"
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <HeaderDesktop />
      <HeaderMobile />
      {children}
    </div>
  );
}

export default Layout;
