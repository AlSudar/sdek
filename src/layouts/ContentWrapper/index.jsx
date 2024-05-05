import styles from "./index.module.scss";
import cn from "classname";

const ContentWrapper = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};

export { ContentWrapper };
