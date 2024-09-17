import Image from "next/image";
import styles from "./index.module.scss";
import { Articles } from "../Articles";

const ARTICLE_CARD = [
  {
    text: "Главная",
    imageSrc: "/articles/main/main.jpg",
    href: "/",
  },
  //   {
  //     text: "Кейсы",
  //     imageSrc: "/articles/cases/all-cases-image.jpg",
  //     href: "/#cases",
  //   },
];

const Quote = ({ authorImageSrc, author, authorDesc, text }) => {
  return (
    <>
      {authorImageSrc ? (
        <div className={styles.authorWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              width={174}
              height={174}
              alt={author}
              src={authorImageSrc}
            />
          </div>

          <div className={styles.authorDescWrapper}>
            <div>
              <span
                className={styles.author}
                dangerouslySetInnerHTML={{ __html: author }}
              />
              <span
                className={styles.authorDesc}
                dangerouslySetInnerHTML={{ __html: authorDesc }}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.quotes} />
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </>
  );
};

export { Quote };
