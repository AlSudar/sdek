import { Subtitle } from "../../components/Subtitle";
import { Quotes } from "../Quotes/index";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import styles from "./index.module.scss";
import { Description } from "../Description";

const PersonnelShortage = () => {
  return (
    <ContentWrapper>
      <Subtitle
        className={styles.subtitle}
        title="Главный вызов — кадровый голод"
      />
      <Quotes
        text="Сейчас и&nbsp;в&nbsp;ближайшем будущем ключевые изменения на&nbsp;рынке цифровых HR-решений будут определяться прежде всего главной болью бизнеса&nbsp;&mdash; кадровым голодом."
        author="Антон Спирин"
        authoDesc="Заместитель генерального директора по&nbsp;развитию бизнеса вендора НОТА (Холдинг&nbsp;Т1)"
        imageSrc="/statya/personellstorage/anton.png"
      />
      <div className={styles.content}>
        <div className={styles.contentWrappers}>
          <Description text="По&nbsp;данным SmartRanking, сервисы найма <a href='https://smartranking.ru/ru/analytics/hrtech/rost-vyruchki-na-35-chto-proizoshlo-s-rossijskim-hr-tech-v-pervom-polugodii-2023/' target='_blank'>составляют</a> самый большой сегмент рынка HR-tech и&nbsp;продолжают расти. В&nbsp;обозримом будущем в&nbsp;условиях острой конкуренции за&nbsp;сотрудников он&nbsp;сохранит свою значимость. Однако по&nbsp;темпам роста вперед может выйти сегмент решений для удержания сотрудников в&nbsp;компании, считает Максим Корниенко, директор по&nbsp;развитию бизнеса НОТА ЮНИОН." />
          <Description text="&laquo;В&nbsp;среднем замена квалифицированного специалиста, от&nbsp;поиска до&nbsp;адаптации, на&nbsp;нынешнем &bdquo;рынке кандидата&ldquo; занимает восемь месяцев, ‒ говорит&nbsp;он. ‒ Сейчас стало еще выгоднее, чем раньше, не&nbsp;нанимать, а&nbsp;сохранять персонал&raquo;. Помочь в&nbsp;этом могут, например, решения для комфортного онбординга и&nbsp;адаптации, геймифицированного обучения в&nbsp;удобное время, персонализированных рекомендаций по&nbsp;развитию карьеры в&nbsp;компании." />
        </div>
        <div className={styles.image} />
      </div>
    </ContentWrapper>
  );
};

export { PersonnelShortage };
