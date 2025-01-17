import React from "react";
import styles from "./index.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className={styles.nav}>
              <div className={styles.logo}>
                <h1>
                  COLO<span>SHOP</span>
                </h1>
              </div>
              <div className={styles.navigation}>
                <div className={styles.desktopNav}>
                    <ul>
                        <li><NavLink to ="/">HOME</NavLink></li>
                        <li><NavLink to ="/add">ADD</NavLink></li>
                        <li><NavLink to ="/wishlist">WISHLIST</NavLink></li>
                    </ul>
                </div>
              <div className={styles.shortNav}>
                <ul>
                  <li>
                    <CiSearch />
                  </li>
                  <li>
                    <IoMdPerson />
                  </li>
                  <li>
                  <CiHeart />
                  </li>
                </ul>
              </div>
              
              <div className={styles.menu}>
                <IoMenu />
              </div>
              </div>
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
