import { WrapperBlock } from '@/layouts/WrapperBlock';
import styles from './index.module.scss';
import { Title } from '../Title';
import { Description } from '../Description';
import cn from 'classnames';
import { diagrams, statics } from './data';
import { useEffect, useRef } from 'react';
import useWindowDimensions from '@/utils';

const StaticItemDesktop = ({ item }) => {
  return (
    <div className={styles.staticItem}>
      <p
        className={styles.staticItemDesc}
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      <div className={cn(styles.staticItemProcent, styles[item.type])}>
        <div className={cn(styles.procentBackground, styles.whiteBlueProcent)}>
          {item.whiteBlueProcent && `${item.whiteBlueProcent}%`}
        </div>
        <div className={cn(styles.procentBackground, styles.staticItemBlue)}>
          {item.blueProcent && `${item.blueProcent}%`}
        </div>
        <div
          className={cn(styles.procentBackground, styles.staticItemDarkBlue)}
        >
          {item.darkBlueProcent && `${item.darkBlueProcent}%`}
        </div>
        <div className={cn(styles.procentBackground, styles.staticItemBlack)}>
          {item.darkProcent && `${item.darkProcent}%`}
        </div>
      </div>
    </div>
  );
};

const StaticItemMobile = ({ item, time }) => {
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
    <div className={styles.staticItem} ref={refToComponent}>
      <p
        className={styles.staticItemDesc}
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      <div className={cn(styles.staticItemProcent, styles[item.type])}>
        <div className={cn(styles.procentBackground, styles.whiteBlueProcent)}>
          {item.whiteBlueProcent && `${item.whiteBlueProcent}%`}
        </div>
        <div className={cn(styles.procentBackground, styles.staticItemBlue)}>
          {item.blueProcent && `${item.blueProcent}%`}
        </div>
        <div
          className={cn(styles.procentBackground, styles.staticItemDarkBlue)}
        >
          {item.darkBlueProcent && `${item.darkBlueProcent}%`}
        </div>
        <div className={cn(styles.procentBackground, styles.staticItemBlack)}>
          {item.darkProcent && `${item.darkProcent}%`}
        </div>
      </div>
    </div>
  );
};

const Hyperautomation = () => {
  const { width } = useWindowDimensions();
  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <Title title='Гиперавтоматизация <br /> взаимодействия с&nbsp;клиентами' />
        <div className={styles.cols}>
          <Description text='С&nbsp;увеличением числа каналов взаимодействия, контактов и&nbsp;объема данных о&nbsp;клиентах, которые нужн&nbsp;обрабатывать бизнесу, растет роль инструментов автоматизации, помогающих решать, как&nbsp;агрегировать и&nbsp;анализировать данные, а&nbsp;также управлять связанными с&nbsp;ними бизнес-процессами. В&nbsp;исследовании многие руководители отмечали, что в&nbsp;2022&ndash;2023 годах фокусировались на&nbsp;максимальном сокращении физических каналов взаимодействия с&nbsp;клиентами в&nbsp;пользу текстовых и&nbsp;голосовых чат-ботов.' />
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
                    {item.procent}%
                  </div>
                );
              })}
            </div>
            <div className={styles.diagramsDescriptions}>
              <p
                className={cn(
                  styles.diagramsDescriptionsItem,
                  'animation-first'
                )}
              >
                26% компаний уже&nbsp;используют&nbsp;чат-ботов
                для&nbsp;взаимодействия с&nbsp;клиентами.
              </p>
              <p
                className={cn(
                  styles.diagramsDescriptionsItem,
                  'animation-first'
                )}
              >
                44% компаний активно взаимодействуют с&nbsp;клиентами
                через&nbsp;Telegram.
              </p>
              <p
                className={cn(
                  styles.diagramsDescriptionsItem,
                  'animation-first'
                )}
              >
                Коммуникация при&nbsp;помощи электронной почты применяется
                в&nbsp;97% компаний сегмента&nbsp;B2C.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.staticsWrapper}>
          <div className={styles.statics}>
            <div
              className={cn(
                styles.staticsRow,
                width && width > 720 && 'animation-first'
              )}
            >
              {statics.map((item, id) => {
                if (width && width > 720) {
                  return <StaticItemDesktop item={item} key={id} />;
                }
                const currentId = (id += 1);
                const currentTime = 100 * currentId;
                return (
                  <StaticItemMobile key={id} item={item} time={currentTime} />
                );
              })}
            </div>
            <div className={cn(styles.tags, 'animation-first')}>
              <div className={cn(styles.tag, styles.tagBlack)}>
                <div className={styles.tabBlock} />
                <span>
                  Доля компаний заинтересованных в&nbsp;повышении уровня
                  функциональности автоматизации процесса
                </span>
              </div>
              <div className={cn(styles.tag, styles.tagBlackBlue)}>
                <div className={styles.tabBlock} />
                <span>
                  Доля компаний, в&nbsp;которых процесс используется,
                  но&nbsp;отсутствует автоматизация
                </span>
              </div>
              <div className={cn(styles.tag, styles.tagBlue)}>
                <div className={styles.tabBlock} />
                <span>
                  Доля компаний, в&nbsp;которых процесс используется
                  и&nbsp;есть&nbsp;потребность в&nbsp;автоматизации
                </span>
              </div>
              <div className={cn(styles.tag, styles.tagWhiteBlue)}>
                <div className={styles.tabBlock} />
                <span>
                  Доля компаний, в&nbsp;которых автоматизирован процесс
                </span>
              </div>
            </div>
          </div>
          <p className={cn(styles.description, 'animation-first')}>
            Состояние автоматизации процессов взаимодействия с&nbsp;клиентами
            в&nbsp;сегменте&nbsp;B2B
          </p>
        </div>
      </WrapperBlock>
    </section>
  );
};

export { Hyperautomation };
