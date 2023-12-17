import Image from 'next/image';
import styles from './index.module.scss';
import { WrapperBlock } from '@/layouts/WrapperBlock';
import cn from 'classnames';

const Banner = ({
  desc,
  imgAuthorSrc,
  author,
  withoutMargin,
  bannerBg = '#928cff',
}) => {
  return (
    <WrapperBlock>
      <article style={{ background: bannerBg }} className={cn(styles.banner)}>
        <p
          className={cn(
            styles.desc,
            withoutMargin && styles.descWithoutMargin,
            'animation-first'
          )}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <div className={styles.footer}>
          {imgAuthorSrc && (
            <Image
              width={70}
              height={70}
              alt={author}
              src={imgAuthorSrc}
              className={styles.footerImg}
              priority
            />
          )}
          <p
            className={styles.bannerAuthor}
            dangerouslySetInnerHTML={{ __html: author }}
          />
        </div>
      </article>
    </WrapperBlock>
  );
};

export { Banner };
