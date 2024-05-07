import { Subtitle } from "../../components/Subtitle/index";
import { Quotes } from "../Quotes";
import { Procent } from "../Procent";
import { Description } from "../../statyaComponents/Description/index";
import styles from "./index.module.scss";

const Competitiveness = () => {
  return (
    <>
      <Subtitle
        className={styles.subtitle}
        title="HR-tech как условие конкурентоспособности"
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Description text="По&nbsp;итогам 2023&nbsp;г. объем рынка HR-tech <a href='https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D1%8B%D0%BD%D0%BE%D0%BA_HR-tech#.2A_.D0.98.D1.82.D0.BE.D0.B3.D0.B8_2022_.D0.B3.D0.BE.D0.B4.D0.B0.2C_.D1.81.D0.B8.D1.82.D1.83.D0.B0.D1.86.D0.B8.D1.8F_.D0.B2_2023_.D0.B8_.D0.B4.D0.B0.D0.BB.D1.8C.D0.BD.D0.B5.D0.B9.D1.88.D0.B8.D0.B5_.D0.BF.D0.B5.D1.80.D1.81.D0.BF.D0.B5.D0.BA.D1.82.D0.B8.D0.' target='_blank'>составит</a>, по&nbsp;разным оценкам, от&nbsp;32&nbsp;до&nbsp;60&nbsp;млрд руб., а&nbsp;в&nbsp;обозримом будущем&nbsp;70% компаний <a href='https://ai.gov.ru/knowledgebase/v-otraslyakh/2023_otchet_o_rynke_kadrovyh_tehnologiy_za_2023_god_hr_technology_market_report_2023_unleash_ai/' target='_blank'>сохранят или увеличат</a> вложения в&nbsp;цифровые HR-решения." />
          <Description text="Например, если компания не использует ИИ-решение для оценки множества резюме в рамках массового подбора, ей придется тратиться на работу многочисленных рекрутеров. А если вышедшие на рынок труда «зумеры» не получат привычный digital-опыт на всех этапах взаимодействия, от подбора до адаптации и оценки, ‒ есть риск, что на конкурентном рынке кандидата они выберут другую компанию. Поэтому тренд, который наблюдается все последние годы, сохранится: HR-tech продолжит расти, предоставляя бизнесу цифровые инструменты для решения ключевых кадровых задач." />
        </div>
        <Procent
          pretext="до"
          text="70%"
          desc="компаний сохранят или&nbsp;увеличат вложения в&nbsp;цифровые HR-решения"
          revert={false}
        />
      </div>
      <Quotes
        text="Тренд на&nbsp;рост HR-tech закономерен: из&nbsp;дополнительного преимущества цифровизация&nbsp;HR становится условием конкурентоспособности бизнеса."
        author="Антон Спирин"
        authoDesc="Заместитель генерального директора по&nbsp;развитию бизнеса вендора НОТА (Холдинг&nbsp;Т1)"
        imageSrc="/statya/competitiveness/anton.png"
        type="blue"
        className={styles.banner}
      />
    </>
  );
};

export { Competitiveness };
