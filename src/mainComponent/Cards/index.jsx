import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import { useState } from "react";
import cn from "classnames";

const CARDS_MOCK = [
  {
    title: "Умная автоматизация",
    desc: "Автоматизированное движение кандидата по&nbsp;воронке повышает скорость и&nbsp;эффективность рекрутмента. Аналитика и&nbsp;статистика также формируются автоматически.",
    content:
      "&#8226; Аналитика по&nbsp;кандидатам <br /><br />&#8226; Загрузка и&nbsp;автораспознавание документов кандидата <br /><br /> &#8226; Автоматическое формирование статистики по&nbsp;каждому этапу и&nbsp;кандидату и&nbsp;удобный конструктор отчетов",
  },
  {
    title: "Одно окно для&nbsp;всех процессов",
    desc: "Сбор откликов, управление вакансиями и&nbsp;кандидатами и&nbsp;база кандидатов&nbsp;— на&nbsp;единой платформе.",
    content:
      "&#8226; Единое окно для всех сотрудников, вовлеченных в&nbsp;процессы рекрутмента, проверки и&nbsp;согласования кандидата <br /><br />&#8226; Интеграция с&nbsp;основными площадками по&nbsp;подбору персонала (hh.ru, работа.ру, &laquo;Авито.Работа&raquo;, LinkedIn, SuperJob и&nbsp;др.) <br /><br /> &#8226; Автоматизированная база кандидатов закрывает в&nbsp;среднем каждую пятую вакансию. Такие вакансии закрываются вдвое быстрее, чем кандидатами с&nbsp;рынка <br /><br /> &#8226; Возможность переписки в&nbsp;Telegram из&nbsp;интерфейса системы",
  },
  {
    title: "Ускорение коммуникаций через чат-бот",
    desc: "Встроенный чат-бот ускоряет и&nbsp;упрощает рутинные коммуникации.",
    content:
      "&#8226; Чат-бот берет на&nbsp;себя анкетирование кандидата, автоинформирование о&nbsp;компании, вакансии и&nbsp;схеме проезда <br /><br />&#8226; Сценарии чат-бота гибко настраиваются <br /><br /> &#8226; Вся переписка сохраняется",
  },
  {
    title: "Улучшение Candidate Experience",
    desc: "Прозрачная и&nbsp;своевременная коммуникация с&nbsp;соискателями улучшает опыт взаимодействия с&nbsp;компанией.",
    content:
      "&#8226; Чат-бот ускоряет коммуникацию	  <br /><br />&#8226; Личный кабинет кандидата дает удобный и&nbsp;прозрачный доступ к&nbsp;информации",
  },
  {
    title: "Безопасность",
    desc: "Защита данных и&nbsp;возможность установки на&nbsp;сервера компании.",
    content:
      "&#8226; Входит в&nbsp;реестр отечественного&nbsp;ПО <br /><br />&#8226; Платформа обеспечивает высокую степень безопасности данных <br /><br /> &#8226; Возможность установки на&nbsp;собственные сервера (on&nbsp;premise) позволяет дополнительно обезопасить корпоративные данные",
  },
  {
    title: "Интеграция с&nbsp;существующими системами",
    desc: "Подход &laquo;одного окна&raquo; работает и&nbsp;с&nbsp;внешними, и&nbsp;с&nbsp;внутренними системами. НОТА ЮНИОН адаптируется к&nbsp;процессам заказчика и&nbsp;интегрируется с&nbsp;имеющимися решениями.",
    content:
      "&#8226; Подробная аналитика и&nbsp;внутренняя интеграция с&nbsp;BI-платформой <br /><br />&#8226; Открытый API и&nbsp;интеграции с&nbsp;любыми существующими HR-системами <br /><br /> &#8226; Настройки системы под бизнес-процессы заказчика <br /><br /> &#8226; Кастомные доработки любой сложности",
  },
];

const Card = ({ item, state, onMouseEnter, onMouseLeave }) => {
  return (
    <li className={styles.card}>
      <div
        className={styles.cardVisibleContent}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.cardVisibleContentHeader}>
          <div className={styles.cardIcon} />
          <h3
            className={styles.cardTitle}
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </div>
        <p
          className={styles.cardDesc}
          dangerouslySetInnerHTML={{ __html: item.desc }}
        />
      </div>
      <div
        className={cn(
          styles.cardHiddenContentWrapper,
          state ? styles.cardHiddenContentWrapperActive : ""
        )}
        onMouseEnter={() => state && onMouseEnter()}
        onMouseLeave={() => state && onMouseLeave()}
      >
        <p
          className={styles.cardHiddenContent}
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    </li>
  );
};

const Cards = () => {
  const [visibleCardId, setVisibleCardId] = useState(undefined);

  return (
    <ContentWrapper>
      <Subtitle
        className={styles.title}
        title="Одно окно для&nbsp;рекрутера: система от&nbsp;российского вендора"
      />
      <p className={styles.subtitle}>Главное о НОТА ЮНИОН</p>
      <ul className={styles.list}>
        {CARDS_MOCK.map((item, id) => {
          return (
            <Card
              onMouseEnter={() => setVisibleCardId(id)}
              onMouseLeave={() => setVisibleCardId(undefined)}
              key={id}
              on
              state={id === visibleCardId}
              item={item}
            />
          );
        })}
      </ul>
    </ContentWrapper>
  );
};

export { Cards };
