import cn from "classnames";
import styles from "./index.module.scss";
import { Fade } from "react-awesome-reveal";

const DescriptionComment = ({ title, text, className }) => {
  return (
    <Fade reverse={false}>
      <div className={cn(styles.wrapper, className)}>
        <span className={styles.title}>{title}</span>
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Fade>
  );
};

export { DescriptionComment };
