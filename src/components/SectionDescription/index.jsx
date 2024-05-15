import cn from "classnames";
import styles from "./index.module.scss";

const SectionDescription = ({ text, className }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: text }}
      className={cn(styles.text, className)}
    />
  );
};

export { SectionDescription };
