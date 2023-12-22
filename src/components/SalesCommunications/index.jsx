import { WrapperBlock } from '@/layouts/WrapperBlock';
import styles from './index.module.scss';
import { Title } from '../Title';
import { Description } from '../Description';
import { BannerWithFigures } from '../BannerWithFigures';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import useWindowDimensions from '@/utils';

const diagrams = [
  {
    title: 'Изменился<br /> основной канал<br /> взаимодействия',
    procent: '20',
    size: 'first',
  },
  {
    title: 'Изменился основной канал сбыта',
    procent: '15',
    size: 'second',
  },
  {
    title: 'Не отслеживали /<br /> не знаю',
    procent: '1',
    size: 'third',
  },
  {
    title: 'Ничего не изменилось',
    procent: '66',
    size: 'four',
  },
];

const statistic = [
  { procent: '91', widthType: 'firstWidth', text: 'Используют кол-центр' },
  { procent: '89', widthType: 'secondWidth', text: 'Используют email' },
  {
    procent: '73',
    widthType: 'thirdWidth',
    text: 'Ведут страницу компании во&nbsp;«ВКонтакте»*',
  },
  {
    procent: '53',
    widthType: 'fourWidth',
    text: 'Ведут канал компании в Telegram, а&nbsp;12% разработали там&nbsp;же&nbsp;чат-бота',
  },
  {
    procent: '46',
    widthType: 'fiveWidth',
    text: 'Собирают мнение клиентов по&nbsp;форме обратной связи',
  },
  {
    procent: '36',
    widthType: 'sixWidth',
    text: 'Имеют личный кабинет B2B-клиента',
  },
  {
    procent: '21',
    widthType: 'sevenWidth',
    text: 'Начали вести канал в&nbsp;«Дзене»',
  },
  {
    procent: '9',
    widthType: 'eightWidth',
    text: 'Имеют онлайн-чат на&nbsp;сайте',
  },
  {
    procent: '6',
    widthType: 'nineWidth',
    text: 'Имеют чат-бота на&nbsp;сайте компании',
  },
];

const StatisticItem = ({ item, times }) => {
  const refToComponent = useRef();

  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(refToComponent.current, {
          distance: '100px', // Distance from which the element will appear
          origin: 'left', // Origin of the reveal ('top' to appear from the top)
          duration: 500, // Animation duration in milliseconds
          easing: 'linear',
          delay: times,
        });
      }
    }
    animate();
  }, []);

  return (
    <div ref={refToComponent} className={styles.statisticWrapper}>
      <div className={cn(styles.statistic, styles[item.widthType])}>
        <span className={styles.procent}>{item.procent}%</span>
      </div>
      <span
        className={styles.statisticDesc}
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  );
};

const Diagram = ({ item }) => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('animation-second-transform-show');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation-second-transform');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <div className={cn(styles.diagram, 'animation-first')}>
      <p
        className={styles.diagramTitle}
        dangerouslySetInnerHTML={{ __html: item.title }}
      />
      <span
        className={cn(
          styles.diagramProcent,
          styles[item.size],
          'animation-second-transform'
        )}
      >
        {item.procent}%
      </span>
    </div>
  );
};

const SalesCommunications = () => {
  const { width } = useWindowDimensions();
  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <Title title='Омниканальность<br />продаж и&nbsp;коммуникаций' />
        <div className={styles.wrapperDescr}>
          <Description text='Потребители сегодня живут, переключаясь между&nbsp;экранами, и&nbsp;ожидают, что&nbsp;заказ можно&nbsp;начать&nbsp;в&nbsp;одном интерфейсе и&nbsp;бесшовно продолжить в&nbsp;другом. То&nbsp;же касается и&nbsp;коммуникации с&nbsp;брендами.' />
        </div>
        <div className={styles.circleDiagramsWrapper}>
          <div className={styles.circleDiagrams}>
            {diagrams.map((item, id) => {
              return <Diagram item={item} key={id} />;
            })}
          </div>
          <p className={cn(styles.circleDiagramsDecs, 'animation-first')}>
            Распределение компаний по уровню изменения основных каналов продаж в
            B2C
          </p>
        </div>
        <BannerWithFigures text='60% компаний, изменивших основной канал взаимодействия со&nbsp;своими покупателями, увеличили частоту покупок' />
        <div className={styles.cols}>
          <Description text='Лидеры рынка по-разному комбинируют новые каналы продаж и&nbsp;используют максимум способов оставаться на&nbsp;связи с&nbsp;потребителями в&nbsp;различных каналах и&nbsp;24/7: мессенджеры, социальные сети, электронную почту, системы видеоконференцсвязи, круглосуточные кол-центры, чат-боты, голосовые помощники. Это подтверждается исследованием &laquo;Публичная цифровая зрелость.B2B&raquo; аналитического агентства российского вендора НОТА&nbsp;(16+) в&nbsp;котором проанализированы процессы цифровой трансформации крупнейших компаний 12&nbsp;отраслей российской экономики.' />
          <div className={styles.colsRight}>
            <div className={styles.statistics}>
              {statistic.map((item, id) => {
                const currentTimeCount = width && width > 720 ? 100 : 50;
                const currentTime = (id += 1);
                return (
                  <StatisticItem
                    item={item}
                    key={id}
                    times={currentTimeCount * currentTime}
                  />
                );
              })}
            </div>
            <p className={styles.colsRightSub}>
              *А 33% предлагали там же взаимодействие с клиентом при помощи
              приложений, активного чата группы или даже чат-бота
            </p>
            <p className={styles.colsRightSubBlue}>
              Применение каналов взаимодействия с клиентами в сегменте B2B
              согласно исследованию «Публичная цифровая зрелость. B2B»
            </p>
          </div>
        </div>
      </WrapperBlock>
    </section>
  );
};

export { SalesCommunications };
