import styles from "./index.module.scss";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import { AnimationSubtitle } from "../../components/AnimationSubtitle/index";
import Image from "next/image";
import cn from "classnames";
import useWindowDimensions from "../../utils/index";
import { Subtitle } from "../../components/Subtitle";

const DigitalizationHR = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <ContentWrapper>
        <Subtitle
          title="Рекрутмент как лидер цифровизации HR"
          className={styles.subtitle}
        />
        <div className={styles.content}>
          <Description text="В&nbsp;свое время задачи рекрутмента стали одним из&nbsp;ключевых драйверов развития HR-tech. &laquo;Двадцать лет назад на&nbsp;рынок труда вышло новое поколение, которое уже не&nbsp;получалось набирать просто через объявления в&nbsp;газетах или на&nbsp;столбах, ‒ приводит пример Корниенко. ‒ Так стали расти системы подбора, которые вместе с&nbsp;системами обучения тогда и&nbsp;двигали рынок HR-tech&raquo;. Сейчас крупные вендоры, формирующие цифровые HR-экосистемы, включают туда компонент подбора или обеспечивают возможность для интеграции с&nbsp;этой функцией." />
          <Image
            className={styles.contentImage}
            alt=""
            width={434}
            height={334}
            src="/trendy/digitalizationHR/background.png"
          />
        </div>
      </ContentWrapper>
      <AnimationSubtitle text="На российском рынке цифровых HR-решений растет спрос на комплексную автоматизацию" />
      <ContentWrapper>
        <div className={styles.contentSecond}>
          <Description text="Подбор ‒ крупнейший сегмент российского рынка HR-tech, и&nbsp;по&nbsp;итогам третьего квартала 2023&nbsp;он показал рост около 65%. В&nbsp;будущем тренд сохранится: с&nbsp;учетом кадрового голода на&nbsp;фоне растущих потребностей в&nbsp;рабочей силе рекрутмент останется лидером в&nbsp;области цифровизации&nbsp;HR." />
          <Description text="На&nbsp;сложном и&nbsp;конкурентном рынке труда рекрутмент меняется на&nbsp;глазах. Набирают силу мощные тренды: внедрение ИИ-инструментов, использование скрытой рабочей силы, найм как совместная работа разных подразделений, в&nbsp;том числе через цифровизацию и&nbsp;общую интеграцию HR. Однако карта трендов рекрутмента динамична. В&nbsp;этом быстро развивающемся сегменте можно в&nbsp;любой момент ожидать появления гейм-чейнджеров ‒ идей и&nbsp;решений, которые перевернут рынок и&nbsp;зададут ему новые направления развития." />
        </div>
        <p className={cn(styles.secondSubtitle, "animation-transformY")}>
          Доля подбора персонала на&nbsp;рынке HR-tech (по&nbsp;выручке)
        </p>
        <div className={styles.diagramWrapper}>
          <div className={styles.diagramContentWrapper}>
            <div className={styles.diagramContent}>
              <div
                className={cn(styles.diagramBoxWrapper, "animation-opacity")}
              >
                <span
                  className={cn(styles.diagramBox, styles.diagramBoxWhite)}
                />
                <span>Подбор персонала</span>
              </div>
              <div
                className={cn(styles.diagramBoxWrapper, "animation-opacity")}
              >
                <span
                  className={cn(styles.diagramBox, styles.diagramBoxBlue)}
                />
                <span>Другие сегменты</span>
              </div>
            </div>
            <div
              style={{ display: width && width <= 560 ? "block" : "none" }}
              className={cn(styles.diagram, "animation-opacity")}
            />
            <p className={cn(styles.diagramDesc, "animation-transformY")}>
              <b>*</b> Итоги полного 2023 года для российского HR-tech
              на&nbsp;момент подготовки публикации не&nbsp;подведены,
              но&nbsp;по&nbsp;результатам трех кварталов сегмент найма
              по-прежнему лидирует.
            </p>
          </div>
          <div
            style={{ display: width && width > 560 ? "block" : "none" }}
            className={cn(styles.diagram, "animation-opacity")}
          />
        </div>
        <p className={cn(styles.bottomDesc, "animation-opacity")}>
          Источник - Smart Ranking
        </p>
      </ContentWrapper>
    </>
  );
};

export { DigitalizationHR };
