import Link from "next/link";
import styles from "./index.module.scss";
import cn from "classnames";
import { useState } from "react";

const DATA_MOCK = [
  {
    image: "/main/cases/first.jpg",
    text: "Эффект технологии: как роботизация помогает бизнесу повышать производительность складов и&nbsp;сокращать расходы",
    title: "Статья",
    link: "#",
  },
  {
    image: "/main/cases/second.jpg",
    text: "Как новая система хранения помогла &laquo;Детскому миру&raquo; размещать в&nbsp;1,5 раза больше товаров на&nbsp;той&nbsp;же площади",
    title: "Кейс",
    link: "#",
  },

  {
    image: "/main/cases/third.jpg",
    text: "Как автоматизация сортировочного центра помогает Ozon собирать заказы в&nbsp;несколько раз быстрее",
    title: "Кейс",
    link: "#",
  },
  {
    image: "/main/cases/four.jpg",
    text: "Как работает склад мороженого без людей при &minus;27 &deg;C",
    title: "Кейс",
    link: "#",
  },
];

const Cases = () => {
  const [visibleCardId, setVisibleCardId] = useState(undefined);

  return (
    <ul className={styles.list}>
      {DATA_MOCK.map((item, id) => {
        const state = id === visibleCardId;

        return (
          <li key={id} className={styles.item}>
            <div
              className={styles.background}
              style={{ backgroundImage: `url(${item.image})` }}
              onMouseEnter={() => setVisibleCardId(id)}
              onMouseLeave={() => setVisibleCardId(undefined)}
            ></div>
            <Link
              href={item.link}
              className={cn(styles.link, state ? styles.linkActive : "")}
              onMouseEnter={() => state && setVisibleCardId(id)}
              onMouseLeave={() => state && setVisibleCardId(undefined)}
            >
              <span className={styles.title}>{item.title}</span>
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
