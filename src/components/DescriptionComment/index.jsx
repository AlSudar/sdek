import cn from "classnames";
import styles from "./index.module.scss";

const DescriptionComment = ({ title, text, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <span className={styles.title}>{title}</span>
      <p className={styles.desc} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export { DescriptionComment };
