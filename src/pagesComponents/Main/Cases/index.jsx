import Link from "next/link";
import styles from "./index.module.scss";
import cn from "classnames";
import { useState } from "react";
import useWindowDimensions from "../../../utils/index";

const DATA_MOCK = [
  {
    image: "/main/cases/second.jpg",
    imageMobile: "/main/cases/second-mobile.jpg",
    text: "Как новая система хранения помогла &laquo;Детскому миру&raquo; размещать в&nbsp;1,5 раза больше товаров на&nbsp;той&nbsp;же площади",
    title: "Ворсино Айс",
    link: "#",
  },
  {
    image: "/main/cases/first.jpg",
    imageMobile: "/main/cases/first-mobile.jpg",
    text: "Эффект технологии: как роботизация помогает бизнесу повышать производительность складов и&nbsp;сокращать расходы",
    title: "Невис",
    timePublication: "Читать 24.09",
    link: "#",
  },
  {
    image: "/main/cases/four.jpg",
    imageMobile: "/main/cases/four-mobile.jpg",
    text: "Как работает склад мороженого без людей при &minus;27 &deg;C",
    timePublication: "Читать 25.09",
    title: "UZUM",
    link: "#",
  },
  {
    image: "/main/cases/second.jpg",
    imageMobile: "/main/cases/second-mobile.jpg",
    text: "Как автоматизация сортировочного центра помогает Ozon собирать заказы в&nbsp;несколько раз быстрее",
    timePublication: "Читать 26.09",
    title: "КМКК (РЕННА)",
    link: "#",
  },
];

const Cases = () => {
  const [visibleCardId, setVisibleCardId] = useState(undefined);
  const { width } = useWindowDimensions();

  return (
    <ul id="cases" className={styles.list}>
      {DATA_MOCK.map((item, id) => {
        const state = id === visibleCardId;

        return (
          <li key={id} className={styles.item}>
            <div
              className={styles.eventItem}
              onMouseEnter={() => !item.timePublication && setVisibleCardId(id)}
              onMouseLeave={() => setVisibleCardId(undefined)}
            />
            <div
              className={cn(
                styles.background,
                item.timePublication && styles.backgroundDisabled
              )}
              style={{
                backgroundImage:
                  width && width > 768
                    ? `url(${item.image})`
                    : `url(${item.imageMobile})`,
              }}
            ></div>
            <div
              className={cn(
                styles.linkDescWrapper,
                !item.timePublication && styles.linkDescWrapperHide
              )}
            >
              <span className={styles.title}>{item.title}</span>
              {item.timePublication && (
                <span className={styles.linkTime}>{item.timePublication}</span>
              )}
            </div>
            <Link
              href={item.link}
              className={cn(
                styles.link,
                item.timePublication && styles.linkHide,
                state ? styles.linkActive : ""
              )}
              onMouseEnter={() => state && setVisibleCardId(id)}
              onMouseLeave={() => state && setVisibleCardId(undefined)}
            >
              <p
                dangerouslySetInnerHTML={{ __html: item.text }}
                className={styles.desc}
              />
              <span className={styles.linkDesc}>Читать</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Cases };
