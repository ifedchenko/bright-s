/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./FooterNext.module.css";

const FooterNext = () => {
  return (
    <>
      <div className={styles.social__media}>
        <h3>Our Social Networks</h3>
        <a
          href="https://www.facebook.com/nextofficial"
          target="_blank"
          aria-label="Facebook"
        >
          <img
            src="	https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-facebook.svg"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.twitter.com/nextofficial"
          target="_blank"
          aria-label="Twitter"
        >
          <img
            src="https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-x.svg"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.tiktok.com/@nextofficial"
          target="_blank"
          aria-label="TikTok"
        >
          <img
            src="	https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-tiktok.svg"
            alt="TikTok"
          />
        </a>
        <a
          href="https://instagram.com/nextofficial/"
          target="_blank"
          aria-label="Instagram"
        >
          <img
            src="	https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-instagram.svg"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.pinterest.com/nextofficial"
          target="_blank"
          aria-label="Pinterest"
        >
          <img
            src="	https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-pinterest.svg"
            alt="Pinterest"
          />
        </a>
        <a
          href="https://www.youtube.com/user/nextshopping"
          target="_blank"
          aria-label="YouTube"
        >
          <img
            src="https://www.next.ie/static-content/icons/footer/next/v2/socialmedia/social-youtube.svg
"
            alt="YouTube"
          />
        </a>
      </div>

      <div className={styles.quick__links_block}>
        <a
          className={styles.quick__links}
          href="https://www.next.ie/en/secure/accounts/transfer"
          aria-label="My Account"
        >
          <img
            className={styles.quick__links__img}
            src="	https://www.next.ie/static-content/icons/footer/next/v2/quicklinks/myaccount.svg"
            alt="My Account"
          />

          <span className={styles.quick__links__span}>
            <p>My Account</p>
            <p>Sign-in to your account</p>
          </span>
        </a>
      </div>

      <div className={styles.nav_block}>
        <ul className={styles.nav_block_main__list}>
          <ul className={styles.nav_block_main__list_ch}>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">
                <strong>Help</strong>
              </a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Returns Information</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Shipping Information</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Contact Us</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Product Recall</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_"> Find a Store</a>
            </li>
          </ul>
          <ul className={styles.nav_block_main__list_ch}>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">
                <strong>Privacy & Legal</strong>{" "}
              </a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Privacy & Cookie Policy</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Gender Pay Gap Report</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Terms & Conditions</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Manually Manage Cookies</a>
            </li>
          </ul>
          <ul className={styles.nav_block_main__list_ch}>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">
                {" "}
                <strong>Departaments</strong>{" "}
              </a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Womens</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Mens</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Boys</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Girls</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Home</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Baby</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Brands</a>
            </li>
          </ul>
          <ul className={styles.nav_block_main__list_ch}>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">
                <strong>Other Services </strong>{" "}
              </a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Media & Press</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">The Company</a>
            </li>
            <li className={styles.nav_block_main__list_item}>
              <a href="/_">Careers@next</a>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default FooterNext;
