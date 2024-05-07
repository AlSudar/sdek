import styles from "./index.module.scss";
import cn from "classnames";

const Description = ({ text, className }) => {
  return (
    <p
      className={cn(styles.desc, className, "animation-transformY")}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { Description };
