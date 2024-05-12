import styles from "./index.module.scss";
import cn from "classnames";

const Procent = ({
  pretext,
  text,
  desc,
  revert = false,
  subDesc = "",
  className,
  aftertext = "",
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        revert ? styles.wrapperRigth : "",
        className
      )}
    >
      <div className={styles.header}>
        <span className={styles.pretext}>{pretext}</span>
        <span className={styles.title}>{text}</span>
        {aftertext ? <span className={styles.pretext}>{aftertext}</span> : ""}
      </div>
      <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }} />
      {subDesc ? (
        <p
          className={styles.subDesc}
          dangerouslySetInnerHTML={{ __html: subDesc }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export { Procent };
