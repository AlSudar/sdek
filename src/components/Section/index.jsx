import styles from './index.module.scss';

const Section = ({ children, background = 'white', color }) => {
  return (
    <section
      style={{ background: background, color: color }}
      className={styles.section}
    >
      {children}
    </section>
  );
};

export { Section };
