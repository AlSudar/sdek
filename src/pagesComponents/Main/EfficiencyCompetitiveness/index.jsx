import { SectionDescription } from "../../../components/SectionDescription";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import Image from "next/image";
import styles from "./index.module.scss";
import useWindowDimensions from "../../../utils";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <span className={styles.cardFirstTitle}>
          7,5&nbsp;млн&nbsp;м<sup>2</sup>
        </span>
        <p className={styles.cardFirstDesc}>
          общий объем заключенных сделок в&nbsp;качественных складских объектах
          на&nbsp;территории России составил&nbsp;По итогам четырех кварталов
          2023&nbsp;года.
        </p>
        <p className={styles.cardFirstSubDesc}>
          Это в&nbsp;2,8 раза превышает аналогичный показатель предшествующего
          года и&nbsp;в&nbsp;1,6 раза&nbsp;&mdash; рекордного 2021.
        </p>
      </div>
      <div className={styles.card}>
        <span className={styles.cardSecondTitle}>общий объем сделок</span>
        <div className={styles.cardSecondDescWrapper}>
          <div className={styles.cardSecondDescItem}>
            <span className={styles.cardSecondDescItemTitle}>
              Москва <br /> и&nbsp;Московская область
            </span>
            <div className={styles.cardSecondDescItemContent}>
              <strong>43%</strong> <span>(3,3 млн кв. м)</span>
            </div>
          </div>
          <div className={styles.cardSecondDescItem}>
            <span className={styles.cardSecondDescItemTitle}>
              Санкт-Петербург <br /> и&nbsp;Ленинградскую область
            </span>
            <div className={styles.cardSecondDescItemContent}>
              <strong>13%</strong> <span>(970 тыс. кв. м)</span>
            </div>
          </div>
        </div>
        <p className={styles.cardSecondDesc}>
          Показатель доли вакантных площадей продолжил снижение,
          и&nbsp;по&nbsp;итогам 2023 года достиг рекордно низкого
          значения&nbsp;&mdash; на&nbsp;уровне ниже 0,1%.
        </p>
      </div>
    </div>
  );
};

const EfficiencyCompetitiveness = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width && width > 1024 && <Cards />}
      <div>
        <SectionSubtitle text="Как автоматизация складов влияет на&nbsp;эффективность и&nbsp;конкурентоспособность бизнеса?" />
        <SectionDescription
          text="Начнем с&nbsp;того, что значимость складской деятельности в&nbsp;экономике отдельной компании становится все выше. Склад сейчас&nbsp;&mdash; бутылочное горлышко для бизнеса по&nbsp;нескольким причинам. <br /><br />
Последствиями санкционной политики недружественных стран и&nbsp;текущей геополитической ситуации стали ускоренная локализация производства, увеличение товарных запасов внутри России для покрытия потребностей заказчиков, повышение ввозных пошлин. Возникшая острая востребованность складской недвижимости привела к&nbsp;отсутствию свободных площадей и&nbsp;самым высоким за&nbsp;всю историю наблюдений ставкам аренды, которые, по&nbsp;мнению большинства аналитиков, продолжат расти. В&nbsp;2023 году ввиду рекордных объемов заключенных сделок спекулятивные площади были практически полностью поглощены, а&nbsp;на&nbsp;новые спекулятивные проекты контракты подписываются до&nbsp;ввода в&nbsp;эксплуатацию, что привело к&nbsp;ситуации, когда доля вакантных площадей находится на&nbsp;околонулевом уровне на&nbsp;всей территории России. <br /><br />
Ключевые девелоперы складской недвижимости работают на&nbsp;пределе своих строительных возможностей. При этом высокая стоимость заемных средств, вызванная ростом ключевой ставки, снижает интерес к&nbsp;новым проектам со&nbsp;стороны девелоперов и&nbsp;инвесторов, что приводит к&nbsp;сокращению количества новых проектов на&nbsp;рынке. В&nbsp;условиях продолжающейся нехватки свободных складских площадей ставки аренды формируются на&nbsp;основе предложения строящихся площадей, а&nbsp;также будущих предложений о&nbsp;высвобождении. <br /><br />
К&nbsp;концу 2023 года средняя ставка аренды в&nbsp;Московском столичном регионе достигла отметки в&nbsp;8&nbsp;500 рублей за&nbsp;квадратный метр в&nbsp;год (triple net), что на&nbsp;55% выше, чем в&nbsp;конце 2022&nbsp;года."
        />
        {width && width < 1024 && <Cards />}
        <Image
          className={styles.image}
          src="/main/efficiency-competitiveness/image.jpg"
          alt=""
          width={736}
          height={406}
        />
      </div>
    </>
  );
};

export { EfficiencyCompetitiveness };
