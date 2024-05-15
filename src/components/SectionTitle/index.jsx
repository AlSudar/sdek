import cn from "classnames";
import styles from "./index.module.scss";

const SectionTitle = ({ text, className }) => {
  return (
    <h2
      className={cn(styles.subtitle, className)}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { SectionTitle };
