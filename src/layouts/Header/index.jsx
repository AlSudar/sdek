import Link from "next/link";
import { ContentWrapper } from "../ContentWrapper";
import styles from "./index.module.scss";
import cn from "classnames";
import useWindowDimensions from "../../utils/index";
import { useEffect, useRef, useState } from "react";

const LinksBlock = ({ activeLink, width, seVisibleMenu }) => {
  return (
    <div className={styles.linkWrapper}>
      {width < 768 && (
        <button
          className={styles.closeButton}
          onClick={() => seVisibleMenu(false)}
        />
      )}
      {[
        { link: "/", text: "Главная" },
        { link: "/statya", text: "Статья" },
        { link: "/trandy", text: "Тренды" },
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
      <header className={styles.header}>
        <ContentWrapper className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <a href="#" target="_blank" className={styles.nota}>
                <img
                  src="/header/nota-logo.svg"
                  alt="Logo nota and union company"
                />
              </a>
              <div className={styles.closeIcon} />
              <div className={styles.vedomostyWrapper}>
                <a href="#" target="_blank" className={styles.vedomosty}>
                  <img src="/header/vedomosti-logo.svg" alt="Logo vedomosti" />
                </a>
              </div>
            </div>
            <span className={styles.ageWrapper}>
              Специальный проект <span className={styles.age} />
            </span>
          </div>
        </ContentWrapper>
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
