import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description";
import { Quotes } from "../../components/Quotes";
import styles from "./index.module.scss";

const TrainingAdaptation = () => {
  return (
    <ContentWrapper>
      <div className={styles.wrapper}>
        <Description text="Пионерами на&nbsp;рынке HR-tech обычно становятся компании с&nbsp;массовым наймом ‒ ритейлеры, производства. Из-за высокой текучести им&nbsp;жизненно необходимы средства для быстрого подбора, найма, обучения и&nbsp;удержания сотрудников. Поэтому они раньше других пробуют и&nbsp;адаптируют для себя появляющиеся цифровые решения. А&nbsp;когда пионеры достигают хороших результатов, новыми решениями начинают интересоваться и&nbsp;в&nbsp;других сегментах рынка." />
        <Description text="Чтобы обеспечить позитивный опыт у&nbsp;соискателей и&nbsp;сотрудников, лидеры в&nbsp;HR&nbsp;Tech прибегают к&nbsp;технологичным решениям. Среди последних <a href='https://www.sap.com/insights/hr-tech-trends.html' target='_blank'>трендов</a> ‒ максимальная автоматизация рутинных задач как в&nbsp;документообороте, так и&nbsp;в&nbsp;коммуникации, обучение и&nbsp;адаптация сотрудников с&nbsp;применением AR- и&nbsp;VR-технологий, поддержка благополучия сотрудников с&nbsp;помощью IoT." />
      </div>
      <Quotes
        text="В&nbsp;условиях кадрового голода в&nbsp;фокусе компании ‒ удержание сотрудников. Обеспечивая их&nbsp;благополучие, поддерживая их&nbsp;в&nbsp;стремлении стать лучше, HR&nbsp;помогает построить лояльность сотрудника к&nbsp;бренду. Безусловно, главный тренд ‒ применение искусственного интеллекта, и&nbsp;работать он&nbsp;будет на&nbsp;пользу не&nbsp;только работодателя, но&nbsp;и&nbsp;сотрудника. Например, с&nbsp;помощью&nbsp;ИИ можно построить систему рекомендаций льгот, исходя из&nbsp;интересов и&nbsp;потребностей конкретного работника"
        author="Екатерина Колесникова"
        authoDesc="Заместитель генерального директора Холдинга Т1&nbsp;по&nbsp;персоналу"
        imageSrc="/statya/TrainingAdaptation/ekaterina.png"
      />
    </ContentWrapper>
  );
};

export { TrainingAdaptation };
