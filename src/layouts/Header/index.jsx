import Link from "next/link";
import { ContentWrapper } from "../ContentWrapper";
import styles from "./index.module.scss";
import cn from "classnames";
import useWindowDimensions from "../../utils/index";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import { CASES_ROUTES } from "../../routes";

const myFont = Montserrat({ subsets: ["latin"] });

const LinksBlock = ({ activeLink, width, seVisibleMenu }) => {
  return (
    <div className={styles.linkWrapper}>
      {width <= 768 && (
        <button
          className={styles.closeButton}
          onClick={() => seVisibleMenu(false)}
        />
      )}
      {[
        { link: "/", text: "Главная" },
        { link: "/technology-effect", text: "Статья" },
      ].map((item, id) => {
        return (
          <Link
            key={id}
            href={item.link}
            className={cn(
              styles.link,
              activeLink === item.link ? styles.activeLink : ""
            )}
          >
            {item.text}
          </Link>
        );
      })}
      <p
        className={cn(
          styles.link,
          styles.dropdownButton,
          (activeLink === CASES_ROUTES.kkmk ||
            activeLink === CASES_ROUTES.uzum ||
            activeLink === CASES_ROUTES.vorsino) &&
            styles.activeLink
        )}
      >
        Кейсы
      </p>
      <ul className={styles.casesList}>
        {[
          //   { title: "Невис", href: CASES_ROUTES.nevis },
          { title: "КМКК (РЕННА)", link: CASES_ROUTES.kkmk },
          { title: "UZUM", link: CASES_ROUTES.uzum },
          { title: "Ворсино айс", link: CASES_ROUTES.vorsino },
        ].map((item, id) => (
          <li key={id} className={styles.casesListItem}>
            <Link
              className={cn(
                styles.casesListItemLink,
                activeLink === item.link ? styles.casesListItemLinkActive : ""
              )}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header = ({ activeLink = "/" }) => {
  const { width } = useWindowDimensions();
  const [visibleMenu, seVisibleMenu] = useState(false);
  const burgerButtonRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      burgerButtonRef.current.style = "display: block";
      document.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    if (width && width < 480) {
      document.addEventListener("scroll", handleScroll);
    }

    return () => document.removeEventListener("scroll", handleScroll);
  }, [width]);

  return (
    <>
      <header className={cn(styles.header, myFont.className)}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <a
              href="https://www.comitas.ru/"
              target="_blank"
              className={styles.comitas}
            >
              <img
                width={144}
                height={27}
                src="/header/comitas-logo.svg"
                alt="Logo Comitas company"
              />
            </a>
            <div className={styles.closeIcon} />
            <div className={styles.vedomostyWrapper}>
              <div className={styles.vedomosty}>
                <img
                  width={93}
                  height={18}
                  src="/header/vedomosti-logo.svg"
                  alt="Logo vedomosti"
                />
              </div>
              <span className={styles.ageWrapper}>
                Специальный проект <span className={styles.age} />
              </span>
            </div>
          </div>
        </div>
      </header>
      {width && width > 768 ? (
        <LinksBlock width={width} activeLink={activeLink} />
      ) : (
        <>
          <button
            style={{ display: width > 480 ? "block" : "none" }}
            ref={burgerButtonRef}
            className={styles.burger}
            onClick={() => seVisibleMenu(!visibleMenu)}
          ></button>
          {visibleMenu && (
            <LinksBlock
              width={width}
              activeLink={activeLink}
              seVisibleMenu={seVisibleMenu}
            />
          )}
        </>
      )}
    </>
  );
};

export { Header };
