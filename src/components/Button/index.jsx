import styles from "./index.module.scss";
import cn from "classname";

export const Button = ({ onClick, text, className }) => (
  <button
    onClick={onClick}
    className={cn(styles.button, className ? className : "")}
  >
    {text}
  </button>
);
