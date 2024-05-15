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
        { link: "/", text: "Статья_1" },
        { link: "/case_1", text: "Кейс_1" },
        { link: "/case_2", text: "Кейс_2" },
        { link: "/case_3", text: "Кейс_3" },
        { link: "/case_4", text: "Кейс_4" },
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
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <a href="#" target="_blank" className={styles.comitas}>
              <img
                width={144}
                height={27}
                src="/header/comitas-logo.svg"
                alt="Logo Comitas company"
              />
            </a>
            <div className={styles.closeIcon} />
            <div className={styles.vedomostyWrapper}>
              <a href="#" target="_blank" className={styles.vedomosty}>
                <img
                  width={93}
                  height={18}
                  src="/header/vedomosti-logo.svg"
                  alt="Logo vedomosti"
                />
              </a>
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
            style={{ display: width > 480 ? "block" : "block" }}
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
