import cn from "classnames";
import styles from "./index.module.scss";

const SectionSubtitle = ({ text, className }) => {
  return (
    <h3
      className={cn(styles.subtitle, className)}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { SectionSubtitle };
