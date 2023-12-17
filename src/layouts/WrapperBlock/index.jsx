import styles from './index.module.scss';

const WrapperBlock = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { WrapperBlock };
