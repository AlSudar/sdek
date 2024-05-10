import styles from "./index.module.scss";

const AnimationSubtitle = ({ text }) => {
  return (
    <h2 className={styles.subtitle}>
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </h2>
  );
};

export { AnimationSubtitle };
