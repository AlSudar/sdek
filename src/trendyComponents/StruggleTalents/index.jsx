import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { AnimationSubtitle } from "../../components/AnimationSubtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import { Quotes } from "../../components/Quotes";
import Image from "next/image";
import cn from "classnames";

const StruggleTalents = () => {
  return (
    <>
      <ContentWrapper>
        <Subtitle
          className={styles.subtitle}
          title="Совместная борьба за&nbsp;таланты"
        />
        <div className={styles.content}>
          <Image
            width={434}
            height={334}
            src="/trendy/struggleTalents/figure.png"
            className={cn(styles.contentImage, "animation-transformY")}
            alt=""
          />
          <div className={styles.contentDescs}>
            <Description text="На&nbsp;современном рынке труда недостаточно быстро найти и&nbsp;правильно оценить перспективного кандидата, его нужно еще и&nbsp;убедить присоединиться к&nbsp;компании. По&nbsp;данным <a target='_blank' href='https://vz.ru/news/2023/4/28/1209677.html'>Ancor</a> и&nbsp;<a href='https://wciom.ru/analytical-reviews/analiticheskii-obzor/luchshii-rabotodatel-rossii-2023' target='_blank'>ВЦИОМ, соискателям важнее всего доход и&nbsp;стабильность компании. А&nbsp;согласно <a href='https://www.avito.ru/company/press/faktory_doveriya_soiskatelei' target='_blank'>исследованию</a> &laquo;Авито Работы&raquo;, 73% кандидатов принимают решение о&nbsp;трудоустройстве, основываясь на&nbsp;репутации работодателя." />
            <Description text="Рекрутер не&nbsp;может прямо влиять на&nbsp;такие факторы, как стабильность компании и&nbsp;уровень зарплат. Однако можно бороться за&nbsp;таланты, работая над отдельными аспектами привлекательности и&nbsp;репутации компании. Для этого нужно объединить усилия нескольких функций: рекрутмента, HR, PR, маркетинга и&nbsp;др. Вот некоторые направления внутри этого тренда на&nbsp;объединение усилий." />
          </div>
        </div>
      </ContentWrapper>
      <AnimationSubtitle text="соискателям важнее всего доход и стабильность компании" />
      <ContentWrapper>
        <div className={styles.contentSecond}>
          {" "}
          <Description text="<b>HR-бренд: совместная работа над привлекательностью компании.</b> На&nbsp;конкурентном рынке труда у&nbsp;кандидата широкий выбор, и&nbsp;он&nbsp;выберет ту&nbsp;компанию, в&nbsp;которой ему будет интересно работать, чьи ценности он&nbsp;разделяет и&nbsp;которая обладает сильным HR-брендом. Другими словами, эффективность найма зависит от&nbsp;привлекательности HR-бренда." />
          <Description text="Чтобы построить и&nbsp;сохранять HR-бренд, требуется выделить ключевые ценности и&nbsp;преимущества компании, рассказать о&nbsp;них рынку и&nbsp;поддерживать их&nbsp;внутри компании. Поэтому в&nbsp;ближайшее время HR-бренд как часть рекрутмента станет кросс-функциональной задачей, которая объединит усилия рекрутеров с&nbsp;PR и&nbsp;маркетингом. Важно учитывать, что с&nbsp;развитием цифровизации растет прозрачность внутренних процессов, а&nbsp;это повышает риски для HR-бренда ‒ это также требует объединения усилий&nbsp;HR и&nbsp;PR." />
        </div>
        <Quotes
          text="&laquo;Самая сложная задача для&nbsp;HR сегодня ‒ удержать ценного специалиста в&nbsp;компании и&nbsp;сохранить его лояльность и&nbsp;мотивацию профессионально развиваться. Соискатели выбирают работодателей, которые удовлетворят не&nbsp;только их&nbsp;карьерные запросы, но&nbsp;и&nbsp;предоставят комфортные условия труда. Сотрудникам важно видеть свой вклад в&nbsp;развитие бизнеса. Поэтому мы&nbsp;внедряем программы наставничества, ротацию, карьерные треки, образовательные программы, поддерживаем профессиональные сообщества внутри компании, развиваем программу благополучия. Залог успешных и&nbsp;долгосрочных отношений с&nbsp;сотрудниками ‒ индивидуальный подход и&nbsp;забота о&nbsp;них&raquo;."
          author="Екатерина Колесникова"
          authoDesc="Заместитель генерального директора Холдинга Т1 по персоналу"
          imageSrc="/trendy/struggleTalents/ekaterina.png"
          type="blue"
        />
        <div className={styles.contentThird}>
          {" "}
          <Description text="<b>Совместная работа над ускорением найма и&nbsp;One Day Offer</b> (&laquo;предложение о&nbsp;найме за&nbsp;один день&raquo;, англ.). Подход One day offer, в&nbsp;отличие от&nbsp;традиционного длительного процесса оценки и&nbsp;приема сотрудника, подразумевает, что кандидат пройдет все этапы процесса найма и&nbsp;узнает итоговое решение за&nbsp;один день. Чаще всего ODO используется в&nbsp;массовом наборе, но&nbsp;полезен и&nbsp;для найма востребованных специалистов, &laquo;заваленных&raquo; офферами и&nbsp;не&nbsp;готовых долго дожидаться решения." />
          <Description text="Подход ODO требует быстрых и&nbsp;скоординированных совместных действий рекрутеров и&nbsp;нанимающих менеджеров. Не&nbsp;менее важно быстро оформить нужные документы, а&nbsp;для этого нужно интегрировать функции управления кандидатами и&nbsp;кадрового документооборота. Это реализуется в&nbsp;современных HR-системах, в&nbsp;том числе в&nbsp;системе НОТА ЮНИОН." />
        </div>
      </ContentWrapper>
    </>
  );
};

export { StruggleTalents };
