import { WrapperBlock } from '@/layouts/WrapperBlock';
import styles from './index.module.scss';
import { Title } from '../Title';
import { Description } from '../Description';
import cn from 'classnames';
import useWindowDimensions from '@/utils';
import { diagrams, statistics } from './data';
import { useEffect, useRef } from 'react';

const StatisticItem = ({ item, time }) => {
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
          delay: time,
        });
      }
    }
    animate();
  }, []);

  return (
    <div ref={refToComponent} className={styles.statisticWrapper}>
      <p className={styles.statisticDescription}>{item.description}</p>
      <div className={styles.statisticColums}>
        <div className={styles.statisticColumsLeft}>{item.procentLeft}%</div>
        <div className={styles.statisticColumsRight}>{item.procentRight}%</div>
      </div>
    </div>
  );
};

const Personalizacia = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <Title title='Персонализация на&nbsp;основе<br />больших данных' />
        <div className={styles.cols}>
          <Description
            text='Для того,&nbsp;чтобы завоевать внимание и&nbsp;лояльность потребителей, компании стараются предлагать&nbsp;то, что&nbsp;будет актуально для&nbsp;конкретного клиента в&nbsp;конкретный момент времени. С&nbsp;этим помогают инструменты персонализации, они&nbsp;включают в&nbsp;себя&nbsp;ценообразование, предложение дополнительных услуг и&nbsp;рекомендации товаров.<br /><br />
            Отдельно выделяется тренд на&nbsp;использование&nbsp;ИИ: модели машинного обучения позволяют совершенствовать сценарии общения с&nbsp;покупателями в&nbsp;чат-ботах и&nbsp;при&nbsp;персонализации предложения и&nbsp;взаимодействия.'
          />
          <div className={styles.diagramsWrapper}>
            <div className={styles.diagrams}>
              {diagrams.map((item, id) => {
                const currentClass =
                  item.type === 'first'
                    ? 'animation-without-transform-first'
                    : item.type === 'second'
                    ? 'animation-without-transform-second'
                    : 'animation-without-transform-third';
                return (
                  <div
                    className={cn(
                      styles.diagram,
                      styles[item.type],
                      currentClass
                    )}
                    key={id}
                  >
                    <span className={cn(styles.diagramText)}>
                      {item.procent}%
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={styles.diagramsDescriptions}>
              <p className={styles.diagramsDescriptionsItem}>
                33% респондентов считают важным персонализировать
                взаимоотношения с&nbsp;клиентом и&nbsp;в&nbsp;секторе&nbsp;B2C
                и&nbsp;в&nbsp;B2B.
              </p>
              <p className={styles.diagramsDescriptionsItem}>
                У&nbsp;56% компаний сегмента&nbsp;B2C, внедривших методику
                персональных предложений, увеличилась частота покупки.
              </p>
              <p className={styles.diagramsDescriptionsItem}>
                У&nbsp;58% вырос средний чек покупки клиентов.
              </p>
            </div>
          </div>
        </div>
        {width && width < 720 && (
          <p className={cn(styles.tagDescription, 'animation-first')}>
            Сравнение долей компаний, которые&nbsp;запустили программу
            лояльности и&nbsp;внедрили методику формирования персональных
            предложений по&nbsp;секторам экономики
          </p>
        )}
        <div className={styles.statisticsWrapper}>
          <div className={styles.statistics}>
            {statistics.map((item, id) => {
              const currentCount = (id += 1);
              const currentTime = 100 * currentCount;
              return <StatisticItem time={currentTime} item={item} key={id} />;
            })}
          </div>
          <div className={cn(styles.tags, 'animation-first')}>
            <div className={cn(styles.tag, styles.tagBlack)}>
              <div className={styles.tabBlock} />
              <span>Запустили программу лояльности</span>
            </div>
            <div className={cn(styles.tag, styles.tagBlue)}>
              <div className={styles.tabBlock} />
              <span>
                Внедрили методику формирования персональных предложений
              </span>
            </div>
            {width && width > 720 && (
              <p className={cn(styles.tagDescription, 'animation-first')}>
                Сравнение долей компаний, которые&nbsp;запустили программу
                лояльности и&nbsp;внедрили методику формирования персональных
                предложений по&nbsp;секторам экономики
              </p>
            )}
          </div>
        </div>
      </WrapperBlock>
    </section>
  );
};

export { Personalizacia };
