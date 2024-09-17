import Link from "next/link";
import styles from "./index.module.scss";
import cn from "classnames";
import { useState } from "react";

const DATA_MOCK = [
  {
    image: "/main/cases/kkmk.jpg",
    text: "Как работает склад мороженого без людей при -27&nbsp;°C.",
    timePublication: "Читать 24.09",
    title: "КМКК (РЕННА)",
    link: "#",
  },
  {
    image: "/main/cases/uzum.jpg",
    text: "Как&nbsp;ведущий российский интеграционный бизнес поддерживает развитие онлайн-торговли в&nbsp;Узбекистане?",
    timePublication: "Читать 01.10",
    title: "UZUM",
    link: "#",
  },
  {
    image: "/main/cases/vorsino.jpg",
    text: "Как с&nbsp;надежным партнером построить производственный склад.",
    title: "Ворсино Айс",
    timePublication: "Читать 08.10",
    link: "#",
  },
  {
    image: "/main/cases/nevis.jpg",
    text: "Каковы главные качества всех&nbsp;процессов, связанных с&nbsp;медициной и&nbsp;здоровьем человека?",
    title: "Невис",
    timePublication: "Читать 15.10",
    link: "#",
  },
];

const Cases = () => {
  const [visibleCardId, setVisibleCardId] = useState(undefined);

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
                backgroundImage: `url(${item.image})`,
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
