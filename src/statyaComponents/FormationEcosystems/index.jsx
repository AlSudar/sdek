import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { Description } from "../../components/Description/index";
import { AnimationSubtitle } from "../../components/AnimationSubtitle";
import { Quotes } from "../../components/Quotes";
import { ContentWrapper } from "../../layouts/ContentWrapper";

const FormationEcosystems = () => {
  return (
    <>
      <ContentWrapper>
        <Subtitle className={styles.subtitle} title="Формирование экосистем" />
        <div className={styles.supWrapper}>
          <div className={styles.subContentWrapperImage} />
          <div className={styles.subContent}>
            <Description text="На&nbsp;российском рынке цифровых HR-решений <a href='https://hr-portal.ru/news/rynok-hr-tech-v-iii-kvartale-2023-vyros-na-39-s-uchetom-vyruchki-headhunter-na-52' target='_blank'>растет спрос</a> на&nbsp;комплексную автоматизацию. Сейчас для цифровизации ключевых HR-функций бизнесу нужно собрать пул из&nbsp;десятков решений разных поставщиков: по&nbsp;<a href='https://ancor.ru/press/insights/hr-tech-2023-trendy-i-perspektivy/' target='_blank'>данным</a> Ancor, компании используют до&nbsp;80&nbsp;разных HR-продуктов одновременно." />
            <Description text="Для заказчика такая разнородность невыгодна. Чем больше вендоров, тем выше общие расходы на&nbsp;покупку и&nbsp;поддержку решений, тем сложнее наладить бесшовное взаимодействие между различными HR-системами. Растут и&nbsp;риски: если один из&nbsp;поставщиков уйдет с&nbsp;рынка, его систему придется замещать и&nbsp;снова интегрировать с&nbsp;&laquo;соседями&raquo;." />
          </div>
        </div>
      </ContentWrapper>
      <AnimationSubtitle text="На российском рынке цифровых HR-решений растет спрос на комплексную автоматизацию" />
      <ContentWrapper>
        <div className={styles.content}>
          <Description text="В&nbsp;ответ на&nbsp;запрос рынка российские разработчики объединяют HR-продукты и&nbsp;формируют собственные экосистемы. Платформы, которая закрывала&nbsp;бы абсолютно все HR-задачи, еще нет, но&nbsp;ряд вендоров&nbsp;&mdash; НОТА, Сбер, VK&nbsp;&mdash; достаточно далеко продвинулись в&nbsp;этом направлении, считает Максим Корниенко." />
          <Description text="При этом на&nbsp;рынке сохранятся нишевые решения, например специализированные системы мотивации или геймификации, решение для обучения в&nbsp;VR. У&nbsp;них свои преимущества по&nbsp;сравнению с&nbsp;мультифункциональными платформами: более низкая цена и&nbsp;максимально точное соответствие потребностям своей узкой целевой аудитории. Однако нишевые продукты могут быть связаны с&nbsp;экосистемными." />
        </div>
        <Quotes
          className={styles.banner}
          text="В&nbsp;перспективе пяти-семи лет российский рынок поделят между собой четыре-пять крупных экосистем и&nbsp;порядка 100 нишевых решений."
          author="Антон Спирин"
          authoDesc="Заместитель генерального директора по&nbsp;развитию бизнеса вендора НОТА (Холдинг&nbsp;Т1)"
          imageSrc="/statya/formationEcosystems/anton.png"
          type="blue"
        />
      </ContentWrapper>
    </>
  );
};

export { FormationEcosystems };
