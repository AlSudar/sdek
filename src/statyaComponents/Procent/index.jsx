import styles from "./index.module.scss";
import cn from "classnames";

const Procent = ({ pretext, text, desc, revert = false }) => {
  return (
    <div className={cn(styles.wrapper, revert ? styles.wrapperRigth : "")}>
      <div className={styles.header}>
        <span className={styles.pretext}>{pretext}</span>
        <span className={styles.title}>{text}</span>
      </div>
      <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export { Procent };
