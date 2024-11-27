/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeaderRakuten.module.css";

const HeaderRakuten = () => {
  return (
    <>
      <Link className={styles.logo__link} href="/some-link">
        <Image
          height="16"
          width="62"
          alt=""
          src="https://fr.shopping.rakuten.com/visuels/0_content_square/autres/Paypal_Horizontal_Logo_White.png"
        />
        Pour votre 1er paiement PayPal* bénéficiez de 7€ offerts dès 49€ d’achat
        avec le code PAYPAL7
      </Link>
      <>
        <div className={styles.logo__container}>
          <Link className={styles.header__logo__link} href="/some-link">
            <Image
              className={styles.header__logo}
              height="60"
              width="204"
              alt="Rakuten - Achat et vente en ligne de produits neufs et d'occasion"
              src="https://fr.shopping.rakuten.com/visuels/0_content_square/autres/rakuten-logo6.svg"
            />
          </Link>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5785173,12.0211459 L7.32684676,17.2728165 C6.89000935,17.7096539 6.89128668,18.4184991 7.32927694,18.8564894 L8.18580253,19.713015 C8.62367488,20.1508873 9.33282729,20.1520932 9.7694754,19.7154451 L16.6731532,12.8117673 C16.891168,12.5937525 17.0000588,12.3079872 17,12.0219532 C16.999935,11.7342401 16.8910737,11.4484451 16.6731532,11.2305246 L9.7694754,4.32684676 C9.33263799,3.89000935 8.62379279,3.89128668 8.18580253,4.32927694 L7.32927694,5.18580253 C6.89140459,5.62367488 6.89019865,6.33282729 7.32684676,6.7694754 L12.5785173,12.0211459 Z"></path>
          </svg>

          <div className={styles.inputContainer}>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                name="searchField"
                placeholder="Que cherchez-vous ?"
              ></input>
              <button type="button" className={styles.searchButton}>
                <svg className={styles.searchIcon} viewBox="0 0 43.09 43.64">
                  <path d="M42.51,40.28,30.17,27.94a17.26,17.26,0,1,0-2.86,2.71L39.73,43.06a2,2,0,1,0,2.78-2.78ZM25.14,28.47A14,14,0,1,1,28,25.76"></path>
                </svg>
              </button>
            </form>
          </div>
          <Link className={styles.header__banner} href="/some-link">
            <Image
              height="51"
              width="190"
              alt=""
              src="https://fr.shopping.rakuten.com/visuels/2021-05-31_10-millions-de-membres_75/2024-11_MERCH_ONGLET_blackweek-generique_175x47-2.svg"
            />
          </Link>
        </div>
        <div className={styles.navbar}>
          <nav className={styles.navbar__links}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <div className={styles.menu__toggle}>
                  <button className={styles.menu__button}>
                    <span className={styles.menu_bar}></span>
                    <span className={styles.menu_bar}></span>
                    <span className={styles.menu_bar}></span>
                  </button>
                  <span className={styles.menu_label}>
                    Parcourir les catégories
                  </span>
                </div>
              </li>

              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    viewBox="0 0 48 48"
                  >
                    <path d="M3 23.344C3 11.556 12.556 2 24.344 2 36.133 2 45.69 11.556 45.69 23.344c-.01 11.784-9.56 21.334-21.345 21.345C12.556 44.689 3 35.133 3 23.344zM24.344 4.958a18.416 18.416 0 1018.417 18.386C42.734 13.19 34.5 4.968 24.344 4.958z"></path>
                    <path d="M17.788 20.15c.809-4.22 3.658-7.059 7.158-7.059a6.369 6.369 0 015.659 3.254l-2.297 2.248a3.944 3.944 0 00-3.342-2.07 3.224 3.224 0 00-2.81 1.557 4.703 4.703 0 00-.73 2.07h7.079l-.483 1.972h-7.01a6.23 6.23 0 00-.069.858c-.01.17-.01.342 0 .512h6.744l-.474 2.17H21.23c.059.736.274 1.452.631 2.1a4.013 4.013 0 003.421 1.971 3.569 3.569 0 002.86-1.489l1.97 2.662a6.901 6.901 0 01-10.745-.73 10.391 10.391 0 01-1.627-4.515h-1.666l.483-2.1h.986a5.511 5.511 0 010-.562 5.915 5.915 0 010-.808h-1.47l.484-1.972 1.232-.069z"></path>
                  </svg>
                  Mettre en vente
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    viewBox="0 0 48 48"
                  >
                    <path d="M23.5 5.75c-9.792 0-17.75 6.583-17.75 14.67 0 4.464 2.43 8.636 6.675 11.441l.614.404v6.647l6.335-4.218.541.092c1.185.201 2.384.302 3.585.303 9.755 0 17.75-6.583 17.75-14.67 0-8.086-7.995-14.669-17.75-14.669zm-1.485 13.826c2.704-.458 4.217-1.485 4.217-2.888 0-1.22-.963-2.017-2.384-2.017a4.74 4.74 0 00-3.502 1.44L18.1 13.726a8.306 8.306 0 015.73-2.274c3.484 0 6.07 2.246 6.07 5.272 0 2.31-1.33 3.85-4.447 5.06v2.522h-3.438v-4.731zm0 10.287v-3.43h3.438v3.439l-3.438-.01zm-11.68 14.192V33.732C5.65 30.412 3 25.6 3 20.419 3 10.811 12.168 3 23.5 3S44 10.811 44 20.42c0 9.608-9.168 17.419-20.5 17.419a24.36 24.36 0 01-3.502-.257l-9.663 6.473z"></path>
                  </svg>
                  Aide
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <img
                    alt=""
                    width={47}
                    src="https://images.fr.shopping.rakuten.com/visuels/Club-Rakuten/icon/club-rd1.svg"
                  ></img>
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    viewBox="0 0 31 32"
                  >
                    <path d="M15.36 29.056c-0.384 0-0.64-0.128-0.896-0.384l-11.264-11.264c-1.664-1.536-2.56-3.712-2.56-5.888s0.896-4.352 2.432-5.888 3.712-2.432 5.888-2.432c2.176 0 4.352 0.896 5.888 2.432l0.512 0.512 0.512-0.512c0.768-0.768 1.664-1.408 2.688-1.792 2.048-0.896 4.352-0.896 6.4 0 1.024 0.384 1.92 1.024 2.688 1.792s1.28 1.664 1.792 2.688c0.384 1.024 0.64 2.048 0.64 3.2s-0.256 2.176-0.64 3.2c-0.384 1.024-1.024 1.92-1.792 2.688l-11.264 11.264c-0.384 0.256-0.64 0.384-1.024 0.384zM9.088 5.76c-1.664 0-3.072 0.64-4.096 1.664s-1.792 2.56-1.792 4.096c0 1.536 0.64 2.944 1.664 4.096l10.368 10.368 10.368-10.368c0.512-0.512 0.896-1.152 1.28-1.92 0.256-0.64 0.384-1.408 0.384-2.176s-0.128-1.536-0.384-2.176c-0.256-0.64-0.768-1.28-1.28-1.92 0 0 0 0 0 0-0.512-0.512-1.152-0.896-1.92-1.28-1.408-0.64-3.072-0.64-4.352 0-0.64 0.256-1.28 0.768-1.92 1.28l-1.408 1.408c-0.512 0.512-1.28 0.512-1.792 0l-1.408-1.408c-0.768-1.024-2.176-1.664-3.712-1.664z"></path>
                  </svg>
                  Mes favoris
                </a>
              </li>

              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    viewBox="0 0 48 48"
                  >
                    <path d="M23.756 27.401c-6.3 0-11.409-5.238-11.409-11.7C12.347 9.239 17.455 4 23.756 4c6.3 0 11.409 5.239 11.409 11.7 0 6.463-5.108 11.701-11.409 11.701zm0-2.799c4.793 0 8.68-3.985 8.68-8.901s-3.887-8.902-8.68-8.902c-4.794 0-8.68 3.986-8.68 8.902 0 4.916 3.886 8.901 8.68 8.901zm6.835 5.61l.577-.3.592.269c5.61 2.549 9.322 6.46 10.772 11.932L43 43.879H5.024l.454-1.758c1.414-5.473 5.12-9.39 10.748-11.94l.591-.269.577.3a14.287 14.287 0 0013.197 0zm-13.829 2.794c-3.956 1.916-6.67 4.562-8.072 8.074h30.62c-1.424-3.514-4.142-6.16-8.088-8.074a16.948 16.948 0 01-14.46 0z"></path>
                  </svg>
                  Se connecter
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="/_" className={styles.nav__link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    viewBox="0 0 48 48"
                  >
                    <path d="M19.468 40.537c1.5 0 2.717-1.234 2.717-2.757 0-1.522-1.217-2.756-2.717-2.756s-2.717 1.234-2.717 2.756c0 1.523 1.216 2.757 2.717 2.757zm0 2.833c-3.042 0-5.508-2.503-5.508-5.59 0-3.086 2.466-5.589 5.508-5.589s5.508 2.503 5.508 5.59c0 3.086-2.466 5.589-5.508 5.589zm17.249-2.833c1.5 0 2.717-1.234 2.717-2.757 0-1.522-1.217-2.756-2.717-2.756S34 36.258 34 37.78c0 1.523 1.217 2.757 2.717 2.757zm0 2.833c-3.042 0-5.508-2.503-5.508-5.59 0-3.086 2.466-5.589 5.508-5.589s5.508 2.503 5.508 5.59c0 3.086-2.466 5.589-5.508 5.589zM9.15 13.297L6.963 6.832H2.396C1.625 6.832 1 6.198 1 5.416 1 4.634 1.625 4 2.396 4h5.563c.596 0 1.126.384 1.32.956l2.512 7.421.633 1.87-1.95.006a1.397 1.397 0 01-1.312-.925 1.53 1.53 0 01-.086-.487 1.406 1.406 0 011.391-1.42l34.6-.095c.935-.002 1.608.91 1.343 1.818l-5.154 17.674a1.398 1.398 0 01-1.339 1.014h-23.5a1.397 1.397 0 01-1.32-.956L9.15 13.297zM17.413 29h21.462l4.327-14.836-30.778.084L17.413 29zm.955-3.136a.991.991 0 01-.984-.998c0-.552.44-1 .983-1l19.282-.006c.543 0 .984.448.984 1s-.441.998-.984.998l-19.282-.006z"></path>
                  </svg>
                  Panier
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </>
  );
};

export default HeaderRakuten;
