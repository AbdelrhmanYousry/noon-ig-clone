import React from "react";
import styles from "./HeaderDesktop.module.scss";
import NavLinkDesktop from "../Elements/NavLinkDesktop/NavLinkDesktop.js";
function HeaderDesktop() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLinkDesktop pathname="/" title="Home" />
        </li>
        <li>
          <NavLinkDesktop pathname="/favorites" title="Favorites" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderDesktop;
