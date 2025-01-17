import React from "react";
import styles from "./index.module.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className={styles.footerFirst}>
                  <h2>Newsletter</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className={styles.footerSecond}>
                  <input type="text" placeholder="Your email" />
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
            <div className={styles.footerEnd}>
                <ul className={styles.first}>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li>Contactus</li>
                </ul>
                <ul>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaSkype /></li>
                        <li><FaPinterest /></li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
