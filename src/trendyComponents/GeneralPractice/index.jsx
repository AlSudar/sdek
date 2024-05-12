import styles from "./index.module.scss";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import Image from "next/image";
import useWindowDimensions from "../../utils/index";

const GeneralPractice = () => {
  const { width } = useWindowDimensions();

  return (
    <ContentWrapper>
      <div className={styles.content}>
        <Description text="До&nbsp;сих пор ODO использовали чаще всего в&nbsp;бигтехе: в&nbsp;таких компаниях, как &laquo;Яндекс&raquo; или &laquo;Тинькофф&raquo;. Постепенно он&nbsp;будет становиться общей практикой: всем компаниям важно не&nbsp;упустить подходящего специалиста, а&nbsp;соискателю ‒ не&nbsp;терять время в&nbsp;ожидании ответа. Подход применим почти для всех востребованных специалистов: разработчиков, маркетологов, менеджеров, аналитиков и&nbsp;даже юристов. Например, джуниоров несложно оценить в&nbsp;рамках ODO, а&nbsp;дефицитные мидл-специалисты в&nbsp;принципе не&nbsp;готовы долго ждать оффера." />
        <Description text="Помимо One day offer появляются похожие инструменты: Weekend offer (&laquo;предложение за&nbsp;выходные&raquo;, англ.) или One night offer (&laquo;предложение за&nbsp;ночь&raquo;, англ.). В&nbsp;этих случаях работодатель принимает обязательство сообщить соискателю о&nbsp;финальном решении в&nbsp;понедельник или на&nbsp;следующее утро соответственно." />
      </div>
      {width && (
        <>
          {width <= 768 ? (
            <div className={styles.titleWrapper}>
              <Image
                src="/trendy/generalPractice/figure.png"
                width={268}
                height={236}
                alt=""
                className={styles.titleImage}
              />
              <div className={styles.titleContent}>
                <div className={styles.titleLeft}>
                  <span className={styles.titleLeftBig}>ODO</span>
                  <span className={styles.titleLeftSmall}>One day offer</span>
                </div>
                <span className={styles.titleRight}>
                  Постепенно будет становиться общей&nbsp;практикой
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.titleWrapper}>
              <div className={styles.titleLeft}>
                <span className={styles.titleLeftBig}>ODO</span>
                <span className={styles.titleLeftSmall}>One day offer</span>
              </div>
              <Image
                src="/trendy/generalPractice/figure.png"
                width={268}
                height={236}
                alt=""
                className={styles.titleImage}
              />
              <span className={styles.titleRight}>
                Постепенно будет становиться общей&nbsp;практикой
              </span>
            </div>
          )}
        </>
      )}
      <div className={styles.content}>
        <Description text="Совместное выстраивание системы найма с&nbsp;приоритетом потенциала над опытом соискателей. Поскольку опытных сотрудников не&nbsp;хватает, рекрутерам придется обратить внимание на&nbsp;неопытных соискателей с&nbsp;высоким потенциалом. Это могут быть и&nbsp;недавние выпускники вузов и&nbsp;профильных курсов, и&nbsp;те&nbsp;самые &laquo;скрытые ресурсы&raquo;." />
        <div className={styles.contentSecondContent}>
          <Description text="Однако таких сотрудников необходимо будет впоследствии растить внутри компании, иначе их&nbsp;бизнес-ценность окажется сомнительной. Поэтому рекрутмент высокопотенциальных соискателей должен опираться на&nbsp;систему адаптации, целеполагания, оценки, обучения и&nbsp;развития, то&nbsp;есть фактически на&nbsp;интегрированную систему управления талантами." />
          <Description text="Современные HR-платформы учитывают это и&nbsp;отражают в&nbsp;своей архитектуре, обеспечивая интеграцию всех модулей и&nbsp;компонентов. По&nbsp;оценкам Bersin, в&nbsp;долгосрочной перспективе такой подход обеспечивает компаниям прирост производительности на&nbsp;26%." />
        </div>
      </div>
    </ContentWrapper>
  );
};

export { GeneralPractice };
