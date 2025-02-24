import styles from './index.module.scss';
import Image from 'next/image';
import { BackgroundComponent } from '../../components/BackgroundComponent';
import { Fade } from 'react-awesome-reveal';
import cn from 'classnames';
import { TimeLineDesktop } from '../TimeLineDesktop';
import useWindowDimensions from '@/utils';

const Main = () => {
  const { width } = useWindowDimensions();
  return (
    <main className={styles.main}>
      <div className={styles.main_wrapper}>
        <div id='main-content-1990' className={styles.main_content}>
          {width && width > 680 && <TimeLineDesktop activeId={0} />}
          <Fade triggerOnce direction='up'>
            <div className={styles.content_first}>
              <h2 className={styles.content_first_title}>
                1990-е: время возможностей
              </h2>
              <p className={styles.content_text}>
                Трансформация экономики неразрывно связана с&nbsp;бумом
                предпринимательства, который коснулся и&nbsp;сферы доставки.
                Первые логистические компании работали в&nbsp;сегменте B2B
                (от&nbsp;англ. business to&nbsp;business&nbsp;&mdash;
                &laquo;услуги бизнеса для бизнеса&raquo;) и&nbsp;перевозили
                в&nbsp;основном документы. Приметы времени&nbsp;&mdash;
                &laquo;дикий&raquo; рынок, множество локальных микрокомпаний
                и&nbsp;появление в&nbsp;стране международных операторов,
                на&nbsp;которых старались равняться.
              </p>
            </div>
          </Fade>
          <div className={styles.content_second}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                Аналоговый мир
                <br />и логистический хаос
              </h2>
              <p className={styles.content_text}>
                В&nbsp;то&nbsp;время бизнес обменивался бумажными документами,
                это было последнее десятилетие, когда мир оставался аналоговым.
                Логистические компании обеспечивали уход от&nbsp;монополии
                почты. Доставкой занимались, как правило, частные игроки,
                действовавшие несистемно и&nbsp;без привязки к&nbsp;каким-либо
                стандартам.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Сети магистральных перевозок только формировались,
                  поэтому, чтобы доставить отправление между городами, нередко
                  договаривались с&nbsp;водителями автобусов или проводниками
                  в&nbsp;поездах. Это было время креативного логистического
                  хаоса со&nbsp;множеством возможностей&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author.png'
                    width={50}
                    height={50}
                    alt='Фотография Александра Воронова'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Александр Воронов
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Руководитель службы внутригородской логистики СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
        </div>
      </div>
      <BackgroundComponent
        id='2000'
        backgroundImage='/2000.png'
        title='2000-e'
      />
      <div className={styles.main_wrapper}>
        <div id='main-content-2000' className={styles.main_content}>
          {width && width > 680 && <TimeLineDesktop activeId={1} />}
          <Fade triggerOnce direction='up'>
            <div className={styles.content_first}>
              <h2 className={styles.content_first_title}>
                2000-е:
                <br /> торговля выходит
                <br /> в онлайн
              </h2>
              <p className={styles.content_text}>
                Люди привыкали заказывать товары с&nbsp;доставкой&nbsp;&mdash;
                в&nbsp;основном из&nbsp;офлайн-магазинов и&nbsp;по&nbsp;печатным
                каталогам. Ритейлеры, которые прежде предпочитали выстраивать
                всю логистику сами, понемногу начали отдавать эту часть работы
                на&nbsp;аутсорс. Параллельно появлялись первые
                интернет-магазины, которым тоже нужны были услуги курьеров. Так
                для логистических операторов формировалось новое направление
                бизнеса&nbsp;&mdash; доставка физлицам.
              </p>
            </div>
          </Fade>
          <div className={styles.content_second}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                Запускали магазин
                <br /> — получилась служба доставки
              </h2>
              <p className={styles.content_text}>
                С&nbsp;распространением компьютеров и&nbsp;интернета
                предприниматели поверили в&nbsp;будущее онлайн-торговли.
                В&nbsp;отличие от&nbsp;продавцов покупатели не&nbsp;спешили
                менять привычки, и&nbsp;многие интернет-магазины закрывались
                вскоре после запуска.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Эта участь постигла в&nbsp;2000 году и&nbsp;один
                  новосибирский интернет-магазин. Когда проект пришлось
                  свернуть, курьерский отдел, изначально созданный для нужд
                  магазина, стал самостоятельным бизнесом и&nbsp;получил
                  название &laquo;Служба доставки &bdquo;Экспресс-курьер&ldquo;,
                  сокращенно&nbsp;&mdash; СДЭК&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author2.png'
                    width={50}
                    height={50}
                    alt='Фотография Максима Толстоброва'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Максим Толстобров
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Коммерческий директор СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
          <div className={styles.content_third}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_third_title}>
                В поисках точек роста
              </h2>
              <p className={styles.content_text}>
                Рынок электронной коммерции только зарождался. Игроки
                присматривались друг к&nbsp;другу. Сотрудничество выглядело так:
                представитель интернет-магазина привозил на&nbsp;склад или
                в&nbsp;офис оператора коробки с&nbsp;заказами,
                их&nbsp;тут&nbsp;же принимали курьеры и&nbsp;в&nbsp;тот&nbsp;же
                день развозили по&nbsp;адресам. Учёт вели исключительно вручную,
                на&nbsp;бумажках и&nbsp;в&nbsp;таблицах.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Всё изменил финансовый кризис 2008&nbsp;года.
                  С&nbsp;одной стороны, компании сокращали затраты,
                  с&nbsp;другой&nbsp;&mdash; искали новые возможности для роста.
                  Те, кто был готов к&nbsp;риску, сделали ставку
                  на&nbsp;развитие сотрудничества с&nbsp;интернет-магазинами.
                  Тогда это выглядело как безумие&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author3.png'
                    width={50}
                    height={50}
                    alt='Фотография Вячеслава Пиксаева'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Вячеслав Пиксаев
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Генеральный директор СДЭК 
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
        </div>
      </div>
      <BackgroundComponent
        id='2010'
        backgroundImage='/2010.png'
        title='2010-e'
      />
      <div className={styles.main_wrapper}>
        <div id='main-content-2010' className={styles.main_content}>
          {width && width > 680 && <TimeLineDesktop activeId={2} />}
          <Fade triggerOnce direction='up'>
            <div className={styles.content_first}>
              <h2 className={styles.content_first_title}>
                2010-е: перестройка логистической инфраструктуры
              </h2>
              <p className={styles.content_text}>
                Взлёт электронной коммерции, который предрекали визионеры,
                случился. Объём рынка вырос с&nbsp;240 млрд рублей в&nbsp;2011
                году до&nbsp;1,62 трлн в&nbsp;2019-м, и&nbsp;это было только
                началом (итог 2023 года уже 7,8 трлн рублей). Логистические
                компании, чтобы оседлать волну, стремились закрыть потребности
                интернет-магазинов: автоматизировали обработку отправлений,
                запускали услуги фулфилмента&nbsp;и, главное, расширяли
                географию присутствия.
              </p>
            </div>
          </Fade>
          <div className={styles.content_second}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                Размер сети имеет значение
              </h2>
              <p className={styles.content_text}>
                Раз теперь магазины не&nbsp;ограничены пределами района или
                города, они хотели охватить как можно больше территорий.
                А&nbsp;значит, сотрудничать с&nbsp;теми логистическими
                операторами, которые могут предложить широкую сеть
                подразделений. Кто-то шёл традиционным путём и&nbsp;открывал
                собственные филиалы. Другие искали способы масштабироваться без
                капитальных инвестиций и&nbsp;в&nbsp;сжатые сроки.
              </p>
              <Image
                width={100}
                height={100}
                className={styles.content_image}
                src='/2010_1.png'
                alt=''
              />
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Например, СДЭК внедрил инновационную для отрасли модель
                  партнёрской сети&nbsp;&mdash; с&nbsp;тех пор склады
                  и&nbsp;офисы под этим брендом открывают предприниматели
                  на&nbsp;местах. Так из&nbsp;регионального оператора компания
                  в&nbsp;момент стала заметным федеральным игроком, а&nbsp;затем
                  вырвалась вперёд&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author.png'
                    width={50}
                    height={50}
                    alt='Фотография Александра Воронова'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Александр Воронов
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Руководитель службы внутригородской логистики СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
              <div
                className={cn(
                  styles.content_statistics,
                  styles.content_statistics_marginTop
                )}
              >
                <Image
                  width={50}
                  height={50}
                  className={styles.content_statistics_icon}
                  src='/Vector1.svg'
                  alt=''
                />
                <div className={styles.content_statistics_info}>
                  <h3 className={styles.content_statistics_info_title}>
                    5500 клиентских офисов
                  </h3>
                  <p className={styles.content_statistics_info_text}>
                    насчитывает сеть СДЭК к&nbsp;2025 году 99% из&nbsp;них
                    принадлежат партнёрам бренда
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className={styles.content_third}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_third_title}>
                Всё для удобного получения заказов
              </h2>
              <p className={styles.content_text}>
                С&nbsp;развитием онлайн-торговли в&nbsp;2013&ndash;2016 годах
                совершенствовался и&nbsp;логистический сервис. Чтобы
                соответствовать темпам рынка, важно было реагировать
                одновременно и&nbsp;на&nbsp;потребности и&nbsp;магазинов,
                и&nbsp;их&nbsp;клиентов.
              </p>
              <img className={styles.content_image} src='/2010_2.png' alt='' />
              <p className={styles.content_text}>
                Со&nbsp;стороны продавцов появился запрос на&nbsp;хранение
                товаров, обработку и&nbsp;доставку под ключ&nbsp;&mdash;
                операторы предложили фулфилмент и&nbsp;интеграцию
                с&nbsp;их&nbsp;системами автоматизации. Покупатели, в&nbsp;свою
                очередь, хотели максимально удобного получения заказов, так
                появилась возможность примерки в&nbsp;присутствии курьера,
                частичного выкупа, оплаты при получении и&nbsp;другие опции.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Если раньше мы&nbsp;перенимали опыт западных коллег,
                  теперь российские операторы по&nbsp;уровню сервиса
                  и&nbsp;технологичности решений вырвались вперёд&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author4.png'
                    width={50}
                    height={50}
                    alt='Фотография Артема Островского'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Артем Островский
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Исполнительный директор СДЭК 
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
          <div className={styles.content_fourth}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_fourth_title}>
                Логистика уходит в ИТ
              </h2>
              <p className={styles.content_text}>
                Объём отправлений в&nbsp;сегменте электронной коммерции
                увеличивался со&nbsp;скоростью до&nbsp;70% в&nbsp;год. Этот рост
                стал драйвером для цифровизации и&nbsp;логистической отрасли.
                Если в&nbsp;начале 2000-х операторы использовали простые
                программы складского учёта, то&nbsp;теперь требовались системы,
                интегрированные друг с&nbsp;другом и&nbsp;внешними ресурсами,
                такими как&nbsp;ПО интернет-магазинов.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Первыми ушли в&nbsp;цифру внутренние сервисы: контроль
                  статусов отправлений и&nbsp;сроков доставки, сортировка,
                  маршрутизация и&nbsp;управление транспортными цепочками. Затем
                  появились онлайн-сервисы и&nbsp;мобильные приложения для
                  курьеров и&nbsp;клиентов (6+) .Так ИТ-направление стало
                  неотъемлемой частью всех этапов работы, а&nbsp;логистические
                  операторы стали ещё и&nbsp;технологическими компаниями&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image_position}
                    src='/author5.png'
                    width={50}
                    height={50}
                    alt='Фотография Николая Пахомова'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Николай Пахомов
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Руководитель департамента логистических
                      <br />
                      продуктов СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
        </div>
      </div>
      <BackgroundComponent
        id='2020'
        backgroundImage='/2020.png'
        title='2020-e'
      />
      <div className={styles.main_wrapper}>
        <div id='main-content-2020' className={styles.main_content}>
          {width && width > 680 && <TimeLineDesktop activeId={3} />}
          <Fade triggerOnce direction='up'>
            <div className={styles.content_first}>
              <h2 className={styles.content_first_title}>
                2020-е:
                <br /> маркетплейсы
                <br /> и открытые
                <br /> платформы
              </h2>
              <p className={styles.content_text}>
                Маркетплейсы пришли на&nbsp;смену традиционным
                интернет-магазинам: селлеры стали массово пользоваться
                логистическими услугами, что заставило операторов менять
                стратегии. Уход иностранных компаний открыл перспективные
                направления, такие как доставка из&nbsp;зарубежных магазинов.
                При этом объём отправлений в&nbsp;сегменте электронной торговли
                продолжал стремительно расти: в&nbsp;2019&ndash;2023 годах
                в&nbsp;8&nbsp;раз.
              </p>
              <div className={styles.content_statistics}>
                <Image
                  width={100}
                  height={100}
                  className={styles.content_statistics_icon}
                  src='/Vector2.svg'
                  alt=''
                />
                <div className={styles.content_statistics_info}>
                  <h3 className={styles.content_statistics_info_title}>
                    580 млн &rarr; 4,64 млрд
                  </h3>
                  <p className={styles.content_statistics_info_text}>
                    так выросло количество отправлений онлайн-магазинов
                    и&nbsp;селлеров маркетплейсов с&nbsp;2019 по&nbsp;2023 год
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <div className={styles.content_second}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                Пандемия и&nbsp;фантастический рост маркетплейсов
              </h2>
              <p className={styles.content_text}>
                Безусловно, на&nbsp;сфере логистики отразились и&nbsp;пандемия,
                и&nbsp;ограничения 2022&nbsp;года. Операторы внедряли
                бесконтактную доставку и&nbsp;новые способы оплаты, вводили
                удалённый и&nbsp;гибридный режим работы, а&nbsp;также
                оптимизировали процессы, чтобы компенсировать нехватку курьеров
                в&nbsp;периоды повышенного спроса.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Но&nbsp;главное изменение, повлиявшее на&nbsp;отрасль
                  в&nbsp;последние годы,&nbsp;&mdash; скоростное развитие
                  маркетплейсов и&nbsp;рост сетей пунктов выдачи заказов. Вместе
                  с&nbsp;увеличением количества отправлений логистические
                  операторы обнаружили смещение спроса с&nbsp;доставки
                  &laquo;последней мили&raquo; на&nbsp;фулфилмент, магистральные
                  перевозки и&nbsp;услуги распределённого хранения грузов
                  в&nbsp;разных регионах: чем ближе склад к&nbsp;покупателю, тем
                  быстрее и&nbsp;дешевле доставка.
                </p>
                <p className={styles.content_quote_text}>
                  Также стала популярной услуга для селлеров: доставка груза
                  до&nbsp;маркетплейса, когда оператор забирает груз
                  у&nbsp;селлера, упаковывает и&nbsp;обрабатывает
                  по&nbsp;требованиям конкретного маркетплейса, а&nbsp;затем
                  отвозит в&nbsp;распределительный центр маркетплейса&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image_position}
                    src='/author5.png'
                    width={50}
                    height={50}
                    alt='Фотография Николая Пахомова'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Николай Пахомов
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Руководитель департамента логистических <br />
                      продуктов СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
          <div className={styles.content_third}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_third_title}>
                Скорость и точность доставки
              </h2>
              <p className={styles.content_text}>
                Маркетплейсы задали тренд на&nbsp;гиперлокальную доставку
                &laquo;последней мили&raquo;. Теперь заказы едут
                к&nbsp;получателю не&nbsp;напрямую из&nbsp;центрального
                сортировочного центра, а&nbsp;из&nbsp;ближайшего пункта выдачи
                заказов. Такая схема позволяет доставлять отправления
                не&nbsp;в&nbsp;течение дня, как раньше, а&nbsp;в&nbsp;короткий
                интервал или к&nbsp;конкретному времени. Кроме того, растёт
                спрос на&nbsp;доставку &laquo;по&nbsp;клику&raquo;, когда
                получатель может в&nbsp;любой момент нажать кнопку и&nbsp;курьер
                привезёт заказ в&nbsp;течение 30&nbsp;минут.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Доставлять отправления быстро и&nbsp;точно рассчитывать
                  время помогают системы &bdquo;умной&ldquo; маршрутизации,
                  которые учитывают загрузку курьера, ситуацию на&nbsp;дорогах,
                  количество свободных курьеров поблизости и&nbsp;другие
                  параметры&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author4.png'
                    width={50}
                    height={50}
                    alt='Фотография Артема Островского'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Артем Островский
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Исполнительный директор СДЭК
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
          <div className={styles.content_fourth}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_fourth_title}>
                Сервисы для развития бизнеса
              </h2>
              <p className={styles.content_text}>
                Крупные игроки стремятся развивать не&nbsp;только доставку,
                но&nbsp;и&nbsp;взаимодополняющие проекты. По&nbsp;отдельности
                эти инициативы были&nbsp;бы слишком затратными,
                но&nbsp;благодаря синергии это становится выгодным
                и&nbsp;операторам, и&nbsp;их&nbsp;клиентам. Получается открытая
                предпринимательская платформа, где партнёры операторов могут
                развивать бизнес с&nbsp;поддержкой разнонаправленных сервисов.
              </p>
              <p className={styles.content_text}>
                Один из&nbsp;таких проектов&nbsp;&mdash; рекламный инструмент
                для предпринимателей &laquo;СДЭК Медиа&raquo;. Благодаря ему
                компании могут использовать площадки оператора для продвижения
                своих товаров и&nbsp;услуг: в&nbsp;офисах, в&nbsp;приложении
                и&nbsp;на&nbsp;сайте. А&nbsp;платёжный сервис CDEK PAY позволяет
                компаниям выгодно принимать все виды онлайн-платежей
                от&nbsp;физлиц и&nbsp;бизнеса, использовать офлайн-терминалы
                и&nbsp;упрощает расчёты для всех участников.
              </p>
              <blockquote className={styles.content_quote}>
                <p className={styles.content_quote_text}>
                  &laquo;Поясню на&nbsp;примере. Продавцы продвигают свои товары
                  через сервис размещения рекламы &bdquo;СДЭК Медиа&ldquo;.
                  Мы&nbsp;эти товары доставляем покупателям, а&nbsp;все расчёты
                  проходят через платёжный агрегатор CDEK PAY. Ещё
                  пример&nbsp;&mdash; маркетплейс зарубежных товаров &bdquo;СДЭК
                  Shopping&ldquo;, который мы&nbsp;перезапустили после ухода
                  из&nbsp;России ряда иностранных брендов. Проект помогает
                  компании развивать своё международное присутствие и&nbsp;тоже
                  использует сервисы CDEK PAY и&nbsp;&bdquo;СДЭК
                  Медиа&ldquo;&raquo;.
                </p>
                <div className={styles.content_quote_author}>
                  <Image
                    className={styles.content_quote_author_image}
                    src='/author2.png'
                    width={50}
                    height={50}
                    alt='Фотография Максима Толстоброва'
                  />
                  <div className={styles.content_quote_author_info}>
                    <p className={styles.content_quote_author_name}>
                      Максим Толстобров
                    </p>
                    <p className={styles.content_quote_author_text}>
                      Исполнительный директор СДЭК 
                    </p>
                  </div>
                </div>
              </blockquote>
            </Fade>
          </div>
        </div>
      </div>
      <BackgroundComponent
        id={'future'}
        backgroundImage='/future.png'
        title='Взгляд в будущее'
      />
      <div className={styles.main_wrapper}>
        <div id='main-content-future' className={styles.main_content}>
          {width && width > 680 && <TimeLineDesktop activeId={4} />}
          <div className={styles.content_first}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_first_title}>
                Взгляд в&nbsp;будущее: что изменится в&nbsp;логистике завтра
              </h2>
              <p className={styles.content_text}>
                Тенденции, которые с&nbsp;высокой вероятностью станут массовыми
                в&nbsp;ближайшее время,&nbsp;&mdash; прогноз экспертов СДЭК:
              </p>
            </Fade>
          </div>
          <div className={styles.content_second}>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                1. Развитие нелогистических услуг для бизнеса.
              </h2>
              <p className={styles.content_text}>
                По&nbsp;мере роста маркетплейсов работа с&nbsp;ними становится
                для продавцов менее выгодной из-за высокой конкуренции
                и&nbsp;сопутствующих расходов. Селлеры открывают собственные
                интернет-магазины, их&nbsp;количество снова увеличивается.
                А&nbsp;вместе с&nbsp;тем&nbsp;&mdash; и&nbsp;спрос
                на&nbsp;открытые предпринимательские платформы. Логистические
                операторы окончательно перестанут восприниматься как
                исключительно сервисы обработки и&nbsp;доставки грузов,
                выиграют&nbsp;те, кто будет оказывать комплексные
                услуги&nbsp;&mdash; от&nbsp;сервисов приёма платежей
                до&nbsp;возможностей продвижения.
              </p>
            </Fade>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                2. Ещё большая гибкость параметров доставки.
              </h2>
              <p className={styles.content_text}>
                Российский логистический сервис смог стать одним из&nbsp;лучших
                во&nbsp;многом благодаря ориентированности на&nbsp;запросы
                конечного получателя. Так будет и&nbsp;дальше. В&nbsp;частности,
                появится больше опций, которые можно настраивать на&nbsp;ходу
                в&nbsp;последний момент. Например, добавлять и&nbsp;убирать
                товары из&nbsp;уже собранного заказа или менять время
                и&nbsp;адрес доставки даже после того, как груз передан курьеру.
              </p>
            </Fade>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                3. Развитие сетей постаматов и&nbsp;объединённые ПВЗ.
              </h2>
              <p className={styles.content_text}>
                Постаматы в&nbsp;каждом доме (по&nbsp;примеру Китая) упростят
                процесс получения заказов. А&nbsp;мультибрендовые пункты выдачи
                позволят сделать логистику &laquo;последней мили&raquo; дешевле
                за&nbsp;счёт экономии на&nbsp;арендных площадях.
                К&nbsp;тому&nbsp;же забирать все заказы в&nbsp;одном
                месте&nbsp;&mdash; это удобно.
              </p>
            </Fade>
            <Fade triggerOnce direction='up'>
              <h2 className={styles.content_second_title}>
                4. Активное внедрение искусственного интеллекта.
              </h2>
              <p className={styles.content_text}>
                ИИ&nbsp;уже стал частью глобального тренда на&nbsp;цифровизацию
                и&nbsp;автоматизацию. В&nbsp;частности, нейросети помогают
                строить транспортные маршруты, отвечать на&nbsp;запросы
                в&nbsp;службу поддержки и&nbsp;даже искать потерявшиеся
                отправления по&nbsp;фото. В&nbsp;перспективе нейросети возьмут
                на&nbsp;себя ещё больше задач&nbsp;&mdash;
                от&nbsp;прогнозирования спроса до&nbsp;автономного управления
                процессом доставки.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Main };
