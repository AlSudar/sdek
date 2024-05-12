import styles from "./index.module.scss";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import useWindowDimensions from "../../utils/index";
import cn from "classnames";

const ODO = () => {
  const { width } = useWindowDimensions();

  return (
    <ContentWrapper>
      <h2 className={cn(styles.subtitle, "animation-transformY")}>
        Применение One Day Offer (ODO) в&nbsp;России
      </h2>
      <div className={styles.diagramsWrapper}>
        <div className={cn(styles.diagramWrapperFirst, "animation-opacity")}>
          <div className={styles.diagramFirst} />
          <p className={styles.diagramBottom}>
            <b>уже применяют</b> ODO
          </p>
        </div>
        <div
          className={cn(styles.diagramWrapperSecond, "animation-opacitySecond")}
        >
          <div className={styles.diagramSecond} />
          <p className={styles.diagramBottom}>
            <b>применят ODO в&nbsp;крайнем случае</b> (для очень срочного найма)
          </p>
        </div>
        <div
          className={cn(styles.diagramWrapperThird, "animation-opacityThird")}
        >
          <div className={styles.diagramThird} />
          <p className={styles.diagramBottom}>
            <b>хотят попробовать</b> ODO
          </p>
        </div>
      </div>
      <p className={cn(styles.bottom, "animation-opacity ")}>
        Источник ‒ «Поток»
      </p>
    </ContentWrapper>
  );
};

export { ODO };
