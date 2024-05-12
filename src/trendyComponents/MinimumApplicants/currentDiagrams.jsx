import styles from "./index.module.scss";
import { DATA_MOCK } from "./data";
import cn from "classnames";

const currentDiagrams = (width) => {
  if (width > 1024) {
    return (
      <div className={styles.wrapper}>
        <p className={cn(styles.diagramDesc, "animation-opacity")}>
          В&nbsp;России минимальный уровень безработицы, то&nbsp;есть минимум
          соискателей на&nbsp;рынке труда.&nbsp;85% компаний испытывают кадровый
          голод: работодателям не&nbsp;хватает около пяти млн сотрудников.
        </p>

        <ul className={styles.lineList}>
          <li className={styles.firstItem}>
            <div className={styles.line} />
            <span className={styles.firstItemDesc}>Год</span>
          </li>
          {DATA_MOCK.map((item, id) => {
            return (
              <li className={styles.item} key={id}>
                <div
                  style={{
                    background: item.color,
                    height: `${item.height / 10}rem`,
                  }}
                  className={cn(styles.diagram, "animation-transformY-delay")}
                >
                  <span>{item.value}</span>
                </div>
                <span className={styles.diagramYear}>{item.year}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.diagramBottom} />
      </div>
    );
  }

  if (width <= 680) {
    return (
      <>
        <div className={styles.wrapper}>
          <ul className={styles.lineList}>
            <li className={styles.firstItem}>
              <div className={styles.line} />
              <span className={styles.firstItemDesc}>Год</span>
            </li>
            {[...DATA_MOCK].slice(0, 7).map((item, id) => {
              return (
                <li className={styles.item} key={id}>
                  <div
                    style={{
                      background: item.color,
                      height: `${item.height}px`,
                    }}
                    className={cn(styles.diagram, "animation-transformY-delay")}
                  >
                    <span>{item.value}</span>
                  </div>
                  <span className={styles.diagramYear}>{item.year}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.diagramBottom} />
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.lineList}>
            {[...DATA_MOCK].slice(7, 15).map((item, id) => {
              return (
                <li className={styles.item} key={id}>
                  <div
                    style={{
                      background: item.color,
                      height: `${item.height}px`,
                    }}
                    className={cn(styles.diagram, "animation-transformY-delay")}
                  >
                    <span>{item.value}</span>
                  </div>
                  <span className={styles.diagramYear}>{item.year}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.diagramBottom} />
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.lineList}>
            {[...DATA_MOCK].slice(15, 23).map((item, id) => {
              return (
                <li className={styles.item} key={id}>
                  <div
                    style={{
                      background: item.color,
                      height: `${item.height}px`,
                    }}
                    className={cn(styles.diagram, "animation-transformY-delay")}
                  >
                    <span>{item.value}</span>
                  </div>
                  <span className={styles.diagramYear}>{item.year}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.diagramBottom} />
        </div>
        <div className={styles.wrapper}>
          <p className={cn(styles.diagramDesc)}>
            В&nbsp;России минимальный уровень безработицы, то&nbsp;есть минимум
            соискателей на&nbsp;рынке труда.&nbsp;85% компаний испытывают
            кадровый голод: работодателям не&nbsp;хватает около пяти млн
            сотрудников.
          </p>

          <ul className={styles.lineList}>
            {[...DATA_MOCK.slice(23, DATA_MOCK.length)].map((item, id) => {
              return (
                <li className={styles.item} key={id}>
                  <div
                    style={{
                      background: item.color,
                      height: `${item.height}px`,
                    }}
                    className={cn(styles.diagram, "animation-transformY-delay")}
                  >
                    <span>{item.value}</span>
                  </div>
                  <span className={styles.diagramYear}>{item.year}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.diagramBottom} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.lineList}>
          <li className={styles.firstItem}>
            <div className={styles.line} />
            <span className={styles.firstItemDesc}>Год</span>
          </li>
          {[...DATA_MOCK].slice(0, 15).map((item, id) => {
            return (
              <li className={styles.item} key={id}>
                <div
                  style={{
                    background: item.color,
                    height: `${item.height / 10}rem`,
                  }}
                  className={cn(styles.diagram, "animation-transformY-delay")}
                >
                  <span>{item.value}</span>
                </div>
                <span className={styles.diagramYear}>{item.year}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.diagramBottom} />
      </div>
      <div className={styles.wrapper}>
        <p className={cn(styles.diagramDesc)}>
          В&nbsp;России минимальный уровень безработицы, то&nbsp;есть минимум
          соискателей на&nbsp;рынке труда.&nbsp;85% компаний испытывают кадровый
          голод: работодателям не&nbsp;хватает около пяти млн сотрудников.
        </p>

        <ul className={styles.lineList}>
          {[...DATA_MOCK.slice(15, DATA_MOCK.length)].map((item, id) => {
            return (
              <li className={styles.item} key={id}>
                <div
                  style={{
                    background: item.color,
                    height: `${item.height / 10}rem`,
                  }}
                  className={cn(styles.diagram, "animation-transformY-delay")}
                >
                  <span>{item.value}</span>
                </div>
                <span className={styles.diagramYear}>{item.year}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.diagramBottom} />
      </div>
    </>
  );
};

export { currentDiagrams };
