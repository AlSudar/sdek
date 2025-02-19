import styles from './index.module.scss';
import cn from 'classnames';

const MOCK = [
  { title: '1990-e:', desc: 'время возможностей' },
  { title: '2000-e:', desc: 'торговля выходит<br /> в&nbsp;онлайн' },
  {
    title: '2010-e:',
    desc: 'перестройка<br />логистической<br />инфраструктуры',
  },
  { title: '2020-е:', desc: 'маркетплейсы<br />и открытые<br />платформы' },
  {
    title: 'Взгляд<br />в будущее:',
    desc: 'что изменится<br />в логистике завтра',
  },
];

const TimeLineDesktop = ({ activeId }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {MOCK.map((item, id) => {
          return (
            <li
              className={cn(
                styles.listItem,
                Number(id) !== Number(activeId) && styles.disable
              )}
            >
              <span
                className={styles.listItemTitle}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className={styles.listItemDesc}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { TimeLineDesktop };
