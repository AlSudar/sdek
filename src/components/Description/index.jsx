import styles from './index.module.scss';
import cn from 'classnames';

const Description = ({ text }) => {
  return (
    <p
      className={cn(styles.desc, 'animation-first')}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { Description };
