import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import cn from "classnames";

const RelativeValue = () => {
  return (
    <ContentWrapper>
      <Subtitle
        className={styles.title}
        title="НОТА ЮНИОН&nbsp;‒ гибкое решение для&nbsp;автоматизации подбора персонала"
      />
      <ul className={cn(styles.list, "animation-transformY")}>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            на <span>30%</span> ниже
          </p>
          <p className={styles.listItemDesc}>
            Трудозатраты рекрутеров благодаря автоматизации рутины
          </p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            на <span>20%</span> ниже
          </p>
          <p className={styles.listItemDesc}>
            Расходы на&nbsp;рекрутмент или&nbsp;на&nbsp;20% быстрее найм при
            тех&nbsp;же затратах
          </p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            в <span>2</span> раза быстрее
          </p>
          <p className={styles.listItemDesc}>
            Закрывается часть вакансий за&nbsp;счет наработанной базы кандидатов
          </p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            <span>1</span> неделя
          </p>
          <p className={styles.listItemDesc}>
            Требуется на&nbsp;автоматизацию процесса подбора
          </p>
        </li>
      </ul>
      <p className={styles.desc}>По итогам внедрения НОТА ЮНИОН</p>
    </ContentWrapper>
  );
};

export { RelativeValue };
