import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import { Procent } from "../../components/Procent/index";
import Image from "next/image";
import { DATA_MOCK } from "./data";
import cn from "classnames";

const WorkForce = () => {
  return (
    <ContentWrapper>
      <Subtitle title="Скрытая рабочая сила" className={styles.title} />
      <div className={styles.content}>
        <Description
          text="В&nbsp;прошлые десятилетия в&nbsp;поисках кадров работодатели уже открывали для себя новые сегменты рынка труда, в&nbsp;частности, стали работать с&nbsp;молодежью со&nbsp;студенческой и&nbsp;даже школьной скамьи. Сейчас пора найти новый резерв ‒ &laquo;скрытую рабочую силу&raquo;, ту&nbsp;часть трудоспособного взрослого населения, которую работодатели до&nbsp;сих пор фактически игнорировали. Это, например:<br /><br />
		  &nbsp;&#183;&nbsp;&nbsp;люди пенсионного и&nbsp;предпенсионного возраста <br />
		  &nbsp;&#183;&nbsp;&nbsp;с&nbsp;хроническими заболеваниями или инвалидностью <br />
		  &nbsp;&#183;&nbsp;&nbsp;без образования <br />
		  &nbsp;&#183;&nbsp;с&nbsp;особенностями коммуникации, обучения, внимания"
        />
        <Image
          src="/trendy/workForce/figure.jpg"
          alt=""
          width={434}
          height={396}
          className={cn(styles.image, "animation-transformY")}
        />
      </div>
      <h3 className={cn(styles.subtitle, "animation-transformY")}>
        Сколько компаний недоиспользуют ресурсы на&nbsp;рынке труда?
      </h3>
      <ul className={styles.list}>
        {DATA_MOCK.map((item, id) => {
          return (
            <li
              key={id}
              className={cn(styles.listItem, "animation-transformY")}
            >
              <div>
                <span className={styles.listItemTitle}>{item.procent}%</span>
                <span className={styles.listItemSubtitle}>компаний</span>
              </div>
              <div>
                <p
                  className={styles.listItemDesc}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
                {item.sebDesc ? (
                  <span className={styles.listItemSubDesc}>{item.sebDesc}</span>
                ) : (
                  ""
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <Description
        text="Источник ‒ <a href='https://www.vedomosti.ru/management/articles/2022/09/21/941789-vozrast-yarkii-vneshnii-vid' target='_blank'>опрос группы «Актион»</a>"
        className={styles.descBottom}
      />
      <div className={styles.secondWrapper}>
        <Description text="Пока что бизнес неохотно привлекает работников в&nbsp;возрасте, без образования, с&nbsp;инвалидностью или особенностями коммуникации и&nbsp;обучения. Многие из&nbsp;них, откликаясь на&nbsp;вакансии, не&nbsp;получают ответа от&nbsp;работодателя. Принимают их&nbsp;в&nbsp;основном на&nbsp;подработки ‒ без оформления и&nbsp;с&nbsp;почасовой оплатой ‒ и&nbsp;не&nbsp;стремятся полноценно интегрировать в&nbsp;коллектив." />
        <div className={styles.secondWrapperImage} />
      </div>
      <h3 className={cn(styles.subtitle, "animation-transformY")}>
        Трудоустройство среди пенсионеров и&nbsp;людей с&nbsp;инвалидностью
      </h3>
      <div className={styles.diagramWrapper}>
        <div className={styles.diagram}>
          <p className={cn(styles.diagramTitle, "animation-transformY")}>
            <span>8,1 млн</span> из них трудоустроены
          </p>
          <div
            className={cn(
              styles.diagramItem,
              styles.diagramItemFirst,
              "animation-opacity"
            )}
          />
          <span className={cn(styles.diagramBottom, "animation-transformY")}>
            Пенсионеры
          </span>
        </div>
        <div className={styles.diagram}>
          <p className={cn(styles.diagramTitle, "animation-transformY")}>
            <b>более</b>
            <span> 1 млн</span> <br />
            из них трудоустроены
          </p>
          <div
            className={cn(
              styles.diagramItem,
              styles.diagramItemSecond,
              "animation-opacity"
            )}
          />
          <span className={cn(styles.diagramBottom, "animation-transformY")}>
            Люди с инвалидностью
          </span>
        </div>
      </div>
      <Description
        text="Источники: ПФР, Росстат"
        className={styles.descBottom}
      />
      <div className={styles.thirdWrapper}>
        <Description text="Чтобы использовать скрытые резервы, работодателям нужно снять барьеры при найме: принимать людей на&nbsp;основе навыков, а&nbsp;не&nbsp;возраста и&nbsp;образования, и&nbsp;ясно заявить о&nbsp;снижении ограничений в&nbsp;описании вакансий. Затем интегрировать новичков в&nbsp;компанию и&nbsp;удержать&nbsp;их. В&nbsp;этом поможет персонализация (индивидуальный подход в&nbsp;выборе льгот, обучении и&nbsp;адаптации) и&nbsp;инклюзия (включение в&nbsp;общее с&nbsp;коллегами рабочее пространство)." />
        <Procent
          aftertext="раз"
          className={styles.procent}
          pretext="в"
          text="2,7"
          desc="выросло количество предложений от&nbsp;работодателей для сотрудников старшего возраста в&nbsp;2023&nbsp;г."
          subDesc="Источник ‒ <a href='https://www.avito.ru/company/press/avito_rabota_vakansii_dlya_starshego_pokoleniya' target='_blank'>«Авито Работа»</a>"
        />
      </div>
    </ContentWrapper>
  );
};

export { WorkForce };
