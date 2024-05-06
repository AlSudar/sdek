import Image from "next/image";
import styles from "./index.module.scss";

const Quotes = ({ text, author, authoDesc, imageSrc }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.quote} />
      <div className={styles.content}>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        <div className={styles.footer}>
          <Image
            src={imageSrc}
            className={styles.image}
            width={86}
            height={86}
            alt={author}
          />
          <div>
            <p className={styles.author}>{author}</p>
            <p
              className={styles.authoDesc}
              dangerouslySetInnerHTML={{ __html: authoDesc }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Quotes };
