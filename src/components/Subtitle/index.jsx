import styles from "./index.module.scss";
import cn from "classname";

export const Subtitle = ({ title, className }) => (
  <h2
    className={cn(
      styles.subtitle,
      className ? className : "",
      "animation-transformY"
    )}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);
