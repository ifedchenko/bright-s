/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./FooterRakuten.module.css";

const FooterRakuten = () => {
  return (
    <>
      <div className={styles.footer__nav__products}>
        <a
          href="https://global.rakuten.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/RakutenLogos.svg"
            loading="lazy"
            alt="RakutenLogos.svg"
          />
        </a>

        <ul className={styles.footer__nav__products__list}>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">Rakuten Kobo</a>
          </li>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">Rakuten TV </a>
          </li>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">Rakuten Viber </a>
          </li>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">Rakuten Viki </a>
          </li>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">Plus de services </a>
          </li>
          <li className={styles.footer__nav__products__list__item}>
            <a href="/_">À propos de Rakuten</a>
          </li>
        </ul>
        <div>
          <label htmlFor="country"></label>
          <select
            className={styles.select__country}
            id="country"
            name="country"
            defaultValue="fr"
          >
            <option value="fr">France</option>
            <option value="tw">Taiwan</option>
            <option value="jp">Japon</option>
          </select>
        </div>
      </div>
      <p className={styles.footer__nav__copyrights}>
        © Rakuten France 2000 - 2024
      </p>
      <div className={styles.footer__nav__promo}>
        <ul className={styles.footer__nav__promo__list}>
          <li className={styles.footer__nav__promo__list_item}>
            Chaise Black Friday
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Jeux Video
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Makita Black Friday
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Camaieu
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Chaussea
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Informatique
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Lingerie
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Emma Matelas Black Friday
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Manette PS4 Black Friday
          </li>
          <li className={styles.footer__nav__promo__list_item}>
            Black Friday Cyber Monday
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterRakuten;
