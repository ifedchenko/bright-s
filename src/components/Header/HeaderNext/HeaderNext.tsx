/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./HeaderNext.module.css";

const HeaderNext = () => {
  return (
    <>
      <p className={styles.discount}>
        €2 Home delivery within 1-2 days | Free collection from store
      </p>
      <nav className={styles.search__block}>
        <div className={styles.logo__block}>
          <img
            src="https://www.next.ie/static-content/icons/header/next/v3/default/new-next-gold-logo.svg"
            alt="Next Icon"
            width={85}
          ></img>
          <div className={styles.inputContainer}>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                name="searchField"
                placeholder="Search product or brand"
              ></input>
              <button type="button" className={styles.searchButton}>
                <img
                  src="https://www.next.ie/static-content/icons/header/next/v3/default/search-input-button.svg"
                  alt=""
                ></img>
              </button>
            </form>
          </div>
        </div>
        <div className={styles.account__block}>
          <a href="/_" className={styles.account__link}>
            <span>My account</span>
            <img
              src="https://www.next.ie/static-content/icons/header/next/v3/default/next_my-account_desktop.svg"
              alt="Sign in to view account details"
            ></img>
          </a>

          <a href="/_" className={styles.cart__link}>
            <img
              width={24}
              height={24}
              src="https://www.next.ie/static-content/icons/header/next/v3/default/shopping-bag-large.svg"
              alt="Sign in to view account details"
            ></img>
          </a>

          <a href="/_" className={styles.checkout__link}>
            checkout
          </a>

          <button className={styles.country__btn}>
            <img
              className={styles.country__img}
              alt="IE"
              src="https://www.next.ie/static-content/icons/shared/countryflags/ie.png"
            ></img>
          </button>
        </div>
      </nav>
      <div className={styles.category__block}>
        <ul className={styles.category__block__list}>
          <li className={styles.category__block__list__item}>christmas</li>
          <li className={styles.category__block__list__item}>woman</li>
          <li className={styles.category__block__list__item}>men&apos;s</li>
          <li className={styles.category__block__list__item}>girls</li>
          <li className={styles.category__block__list__item}>boys</li>
          <li className={styles.category__block__list__item}>baby</li>
          <li className={styles.category__block__list__item}>shoes</li>
          <li className={styles.category__block__list__item}>home</li>
          <li className={styles.category__block__list__item}>brands</li>
          <li className={styles.category__block__list__item}>clearance</li>
        </ul>
      </div>
    </>
  );
};

export default HeaderNext;
