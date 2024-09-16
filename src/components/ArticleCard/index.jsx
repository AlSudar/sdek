import Link from "next/link";
import styles from "./index.module.scss";

const ArticleCard = ({ text, imageSrc, href }) => {
  return (
    <Link href={href} className={styles.cardWrapper}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <p className={styles.cardText}>{text}</p>
      </div>
    </Link>
  );
};

export { ArticleCard };
