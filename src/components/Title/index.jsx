import styles from './index.module.scss';
import cn from 'classnames';

const Title = ({ title }) => {
  return (
    <h2
      className={cn(styles.title, 'animation-first')}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export { Title };
