import styles from './index.module.scss';

const Text = ({ text, horizontalMargin = 'left' }) => {
  return (
    <p
      className={`${styles.text} ${
        horizontalMargin === 'right'
          ? styles.textMarginRight
          : styles.textMarginLeft
      } element-animation `}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
export { Text };
