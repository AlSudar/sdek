import { crpaLink, gameLink, vedomostyLink } from '@/data/links';
import styles from './index.module.scss';
import { useWindowDimensions } from '@/utils';
import cn from 'classnames';
import { useState } from 'react';

const linksMock = [
  {
    title: 'На старте',
    href: 'at-the-start',
  },
  {
    title: 'Слияния и&nbsp;поглощения',
    href: 'mergers-and-acquisitions',
  },
  {
    title: 'Корпоративные конфликты',
    href: 'corporate-conflicts',
  },
  {
    title: 'Судебные споры',
    href: 'litigation',
  },
  {
    title: 'Банкротство',
    href: 'bankruptcy',
  },
];

const Header = () => {
  const { width } = useWindowDimensions();
  const [navMenuVisible, setNavMenuVisible] = useState();

  return (
    <header className={cn(styles.headerWrapper)}>
      <div className={cn(styles.header, navMenuVisible && styles.headerActive)}>
        <div
          className={cn(
            styles.logosWrapper,
            navMenuVisible && styles.logosWrapperActive
          )}
        >
          <div className={styles.logos}>
            <a href={crpaLink} target='_blank'>
              <img
                src='/Header/logos/logoWork.svg'
                className={styles.logoWork}
              />
            </a>
            <span className={styles.logosBorder} />
            <div>
              <a href={vedomostyLink} target='_blank'>
                <img
                  src='/Header/logos/logoVedomosty.svg'
                  className={styles.logoVedomosty}
                />
              </a>
              <p className={styles.specialProject}>
                Специальный проект
                <span className={styles.specialProjectAge}>18+</span>
              </p>
            </div>
          </div>
          {width < 520 && (
            <button
              onClick={() => setNavMenuVisible(!navMenuVisible)}
              className={cn(
                styles.buttonNav,
                navMenuVisible && styles.buttonNavActive
              )}
            ></button>
          )}
        </div>
        <div
          className={cn(
            styles.content,
            navMenuVisible && styles.contentVisible
          )}
        >
          <ul className={styles.listLinks}>
            {linksMock.map((item, id) => {
              return (
                <li key={id} className={styles.listLink}>
                  <a
                    onClick={() => setNavMenuVisible(false)}
                    href={`#${item.href}`}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></a>
                </li>
              );
            })}
          </ul>
          <a target='_blank' href={gameLink} className={styles.button}>
            Играть
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
