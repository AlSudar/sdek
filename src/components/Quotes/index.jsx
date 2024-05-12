import Image from "next/image";
import styles from "./index.module.scss";
import cn from "classnames";

const Quotes = ({
  text,
  author,
  authoDesc,
  imageSrc,
  type = "white",
  className = "",
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        type === "blue" ? styles.wrapperBlue : "",
        className,
        "animation-transformY"
      )}
    >
      <div className={styles.quote} />
      <div className={styles.content}>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        <div className={styles.footer}>
          <Image
            src={imageSrc}
            className={cn(styles.image)}
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
