import style from './index.module.scss';
import cn from 'classnames';

const BannerWithFigures = ({ text }) => {
  return (
    <p
      className={cn(style.description, 'animation-first')}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { BannerWithFigures };
