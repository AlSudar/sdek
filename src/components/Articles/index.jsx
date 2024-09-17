import { ArticleCard } from "../ArticleCard";
import styles from "./index.module.scss";

const Articles = ({ articleCards }) => {
  return (
    <div className={styles.articles}>
      <p className={styles.articlesTitle}>Читать другие разделы</p>
      <div className={styles.articleList}>
        {articleCards.map((item, id) => (
          <ArticleCard
            key={id}
            text={item.text}
            imageSrc={item.imageSrc}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};
export { Articles };
