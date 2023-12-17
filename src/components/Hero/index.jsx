import { WrapperBlock } from '@/layouts/WrapperBlock';
import style from './index.module.scss';
import cn from 'classnames';

const Hero = () => {
  return (
    <WrapperBlock>
      <div className={style.main}>
        <span className={style.subtitle}>
          Реклама / ООО «Т1 Инновации» / Erid: LdtCKWrhT
        </span>
        <h1 className={style.title}>В&nbsp;поиске контакта</h1>
        <div className={style.content}>
          <p className={cn(style.contentLeft, 'animation-first')}>
            Как лидеры российского бизнеса адаптируются к&nbsp;изменениям
            в&nbsp;потребительском поведении и&nbsp;экономике
          </p>
          <p className={cn(style.contentRight, 'animation-first')}>
            Скорость трансформационных процессов стремительно
            растет&nbsp;&mdash; сегодня&nbsp;компаниям приходится внедрять
            инновации и&nbsp;адаптировать стратегии в&nbsp;считанные недели.
            Чтобы понять, какие факторы больше всего повлияли
            на&nbsp;потребление в&nbsp;ключевых отраслях российского бизнеса
            и&nbsp;как&nbsp;бизнес приспосабливался к&nbsp;этим переменам,
            CRM-платформа НОТА&nbsp;МОДУС&nbsp;(16+)&nbsp;(холдинг&nbsp;Т1)
            провела масштабное исследование. В&nbsp;нем приняли участие более
            150 директоров по&nbsp;маркетингу и&nbsp;клиентскому сервису
            в&nbsp;11&nbsp;отраслях экономики.
          </p>
        </div>
        <p className={cn(style.description, 'animation-first')}>
          В&nbsp;спецпроекте &laquo;Ведомостей&raquo; (16+) мы&nbsp;расскажем
          о&nbsp;шести основных трендах взаимодействия бизнеса с&nbsp;клиентами,
          которыми поделились лидеры рынка. Ознакомиться с&nbsp;полным
          материалом исследования можно в&nbsp;конце материала.
        </p>
      </div>
    </WrapperBlock>
  );
};

export { Hero };
