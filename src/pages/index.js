import cn from 'classnames'
import Head from 'next/head'
import localFont from 'next/font/local'
import styles from './style.module.scss'
import Image from 'next/image'
import { Header } from '../components/Header'
import { BackgroundComponent } from '../components/BackgroundComponent'
import { Footer } from '../components/Footer'
import useWindowDimensions from '../utils/index'
import { Fade } from 'react-awesome-reveal'

// Подключаем локальные шрифты
const myFont = localFont({
	src: [
		{
			path: './fonts/TTFirsBold.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/TTFirsMedium.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})

const Main = () => (
	<main className={styles.main}>
		<div className={styles.main_wrapper}>
			<div className={styles.main_content}>
				<Fade triggerOnce direction='up'>
					<div className={styles.content_first}>
						<h2 className={styles.content_first_title}>
							1990-е: время возможностей
						</h2>
						<p className={styles.content_text}>
							Трансформация экономики неразрывно связана с бумом
							предпринимательства, который коснулся и сферы доставки. Первые
							логистические компании работали в сегменте B2B и развозили, в
							основном, документы. Приметы времени: &laquo;дикий&raquo; рынок,
							множество локальных микро-компаний и появление в стране
							международных операторов, на которых старались равняться.
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
							В то время бизнес обменивался бумажными документами: это было
							последнее десятилетие, когда мир оставался аналоговым.
							Логистические компании обеспечивали уход от монополии почты.
							Доставкой занимались, как правило, частные игроки, действовавшие
							не&nbsp;системно и без привязки к каким-либо стандартам.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								&laquo;Сети магистральных перевозок только формировались,
								поэтому, чтобы доставить отправление между городами, нередко
								договаривались с водителями автобусов или проводниками в
								поездах. Это было время креативного логистического хаоса со
								множеством возможностей&raquo;.
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
		<BackgroundComponent backgroundImage='/2000.png' title='2000-e' />
		<div className={styles.main_wrapper}>
			<div className={styles.main_content}>
				<Fade triggerOnce direction='up'>
					<div className={styles.content_first}>
						<h2 className={styles.content_first_title}>
							2000-е:
							<br /> торговля выходит
							<br /> в онлайн
						</h2>
						<p className={styles.content_text}>
							Люди привыкали заказывать товары с доставкой &mdash; в основном,
							из офлайн-магазинов и по печатным каталогам. Ритейлеры, которые
							прежде предпочитали выстраивать всю логистику сами, понемногу
							начали отдавать эту часть работы на аутсорс. Параллельно
							появлялись первые интернет-магазины, которым тоже нужны были
							услуги курьеров. Так для логистических операторов формировалось
							новое направление бизнеса &mdash; доставка физлицам.
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
							С распространением компьютеров и интернета предприниматели
							поверили в будущее онлайн-торговли. В отличие от продавцов,
							покупатели не спешили менять привычки, и многие интернет-магазины
							закрывались вскоре после запуска.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								&laquo;Эта участь постигла в 2000 году и один новосибирский
								интернет-магазин. Когда проект пришлось свернуть, курьерский
								отдел, изначально созданный для нужд магазина, стал
								самостоятельным бизнесом и получил название: &laquo;Служба
								доставки &bdquo;Экспресс-курьер&ldquo;&raquo;, сокращенно
								&mdash; &laquo;СДЭК&raquo;
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
							присматривались друг к другу. Сотрудничество выглядело так:
							представитель интернет-магазина привозил на склад или в офис
							оператора коробки с заказами, их тут же принимали курьеры и в тот
							же день развозили по адресам. Учет вели исключительно вручную, на
							бумажках и в таблицах.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								&laquo;Все изменил финансовый кризис 2008&nbsp;года.
								С&nbsp;одной стороны, компании сокращали затраты,
								с&nbsp;другой&nbsp;&mdash; искали новые возможности для роста.
								Те, кто был готов к&nbsp;риску, сделали ставку на&nbsp;развитие
								сотрудничества с&nbsp;интернет-магазинами. Тогда это выглядело
								как безумие&raquo;.
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
		<BackgroundComponent backgroundImage='/2010.png' title='2010-e' />
		<div className={styles.main_wrapper}>
			<div className={styles.main_content}>
				<Fade triggerOnce direction='up'>
					<div className={styles.content_first}>
						<h2 className={styles.content_first_title}>
							2010-е: перестройка логистической инфраструктуры
						</h2>
						<p className={styles.content_text}>
							Взлёт электронной коммерции, который предрекали визионеры,
							случился. Объем рынка вырос с 240 млрд рублей в 2011 году до 1,62
							трлн в 2019-м, и это было только началом (итог 2023 года — уже 7,8
							трлн рублей). Логистические компании, чтобы «оседлать волну»,
							стремились закрыть потребности интернет-магазинов:
							автоматизировали обработку отправлений, запускали услуги
							фулфилмента и — главное — расширяли географию присутствия.
						</p>
					</div>
				</Fade>
				<div className={styles.content_second}>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Размер сети имеет значение
						</h2>
						<p className={styles.content_text}>
							Раз теперь магазины не ограничены пределами района или города,
							они хотели охватить как можно больше территорий. А, значит,
							сотрудничать с теми логистическими операторами, которые могут
							предложить широкую сеть подразделений. Кто‑то шёл традиционным
							путём и открывал собственные филиалы. Другие искали способы
							масштабироваться без капитальных инвестиций и в сжатые сроки.
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
								«Например, СДЭК внедрил инновационную для отрасли модель
								франчайзинга — с тех пор склады и офисы под этим брендом
								открывают предприниматели на местах. Так из регионального
								оператора компания в момент стала заметным федеральным игроком,
								а затем вырвалась в лидеры»
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
									5 тыс. клиентских офисов
								</h3>
								<p className={styles.content_statistics_info_text}>
									насчитывает сеть СДЭК к 2025 году 99% из них принадлежат
									франчайзи
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
							С развитием онлайн-торговли в 2013–2016 годах совершенствовался и
							логистический сервис. Чтобы соответствовать темпам рынка, важно
							было реагировать одновременно и на потребности и магазинов, и их
							клиентов.
						</p>
						<img className={styles.content_image} src='/2010_2.png' alt='' />
						<p className={styles.content_text}>
							Со стороны продавцов появился запрос на хранение товаров,
							обработку и доставку «под ключ» — операторы предложили фулфилмент
							и интеграцию с их системами автоматизации. Покупатели, в свою
							очередь, хотели максимально удобного получения заказов — так
							появилась возможность примерки в присутствии курьера, частичного
							выкупа, оплаты при получении и другие опции.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								«Если раньше мы перенимали опыт западных коллег, теперь
								российские операторы по уровню сервиса и технологичности решений
								вырвались вперед»
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
							Объём отправлений в сегменте электронной коммерции увеличивался со
							скоростью до 70% в год. Этот рост стал драйвером для цифровизации
							и логистической отрасли. Если в начале 2000-х операторы
							использовали простые программы складского учёта, то теперь
							требовались системы, интегрированные друг с другом и внешними
							ресурсами, такими как ПО интернет-магазинов.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								«Первыми ушли в цифру внутренние сервисы: контроль статусов
								отправлений и сроков доставки, сортировка, маршрутизация и
								управление транспортными цепочками. Затем появились
								онлайн-сервисы и мобильные приложения для курьеров и клиентов.
								Так ИТ-направление стало неотъемлемой частью всех этапов работы,
								а логистические операторы стали еще и технологическими
								компаниями»
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
		<BackgroundComponent backgroundImage='/2020.png' title='2020-e' />
		<div className={styles.main_wrapper}>
			<div className={styles.main_content}>
				<Fade triggerOnce direction='up'>
					<div className={styles.content_first}>
						<h2 className={styles.content_first_title}>
							2020-е:
							<br /> маркетплейсы
							<br /> и открытые
							<br /> платформы
						</h2>
						<p className={styles.content_text}>
							Маркетплейсы пришли на смену традиционным интернет-магазинам:
							селлеры стали массово пользоваться логистическими услугами, что
							заставило операторов менять стратегии. Уход иностранных компаний
							открыл перспективные направления, такие как доставка из зарубежных
							магазинов. При этом объём отправлений в сегменте электронной
							торговли продолжал стремительно расти: в 2019–2023 годах — в 8
							раз.
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
									580 млн → 4,64 млрд
								</h3>
								<p className={styles.content_statistics_info_text}>
									так выросло количество отправлений онлайн-магазинов и селлеров
									маркетплейсов с 2019 по 2023 годы
								</p>
							</div>
						</div>
					</div>
				</Fade>
				<div className={styles.content_second}>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Пандемия и фантастический рост маркетплейсов
						</h2>
						<p className={styles.content_text}>
							Безусловно, на сфере логистики отразилась и пандемия, и
							ограничения 2022 года. Операторы внедряли бесконтактную доставку и
							новые способы оплаты, вводили удаленный и гибридный режим работы,
							а также оптимизировали процессы, чтобы компенсировать нехватку
							курьеров в периоды повышенного спроса.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								«Но главное изменение, повлиявшее на отрасль в последние годы, —
								скоростное развитие маркетплейсов и рост их сетей пунктов выдачи
								заказов. Вместе с увеличением количества отправлений
								логистические операторы обнаружили смещение спроса с доставки
								«последней мили» на фулфилмент, магистральные перевозки и услуги
								распределенного хранения грузов в разных регионах: чем ближе
								склад к покупателю, тем быстрее и дешевле доставка.
							</p>
							<p className={styles.content_quote_text}>
								Также стала популярной услуга для селлеров — доставки груза до
								маркетплейса, когда оператор забирает груз у селлера,
								упаковывает и обрабатывает по требованиям конкретного
								маркетплейса, — а затем отвозит в распределительный центр
								маркетплейса»
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
							Маркетплейсы задали тренд на гиперлокальную доставку«последней
							мили». Теперь заказы едут к получателю не напрямую из центрального
							сортировочного центра, а из ближайшего пункта выдачи заказов.
							Такая схема позволяет доставлять отправления не в течение дня, как
							раньше,а в короткий интервал или к конкретному времени. Кроме
							того, растет спрос на доставку «по клику», когда получатель может
							в любой момент нажать кнопку, и курьер привезёт заказ в течение 30
							минут.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								«Доставлять отправления быстро и точно рассчитывать время
								помогают системы «умной» маршрутизации, которые учитывают
								загрузку курьера, ситуацию на дорогах, количество свободных
								курьеров поблизостии другие параметры»
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
							Крупные игроки стремятся развивать не только доставку, но и
							взаимодополняющие проекты. По отдельности эти инициативы были бы
							слишком затратными, то благодаря синергии это становится выгодным
							и операторам, и их клиентам. Получается открытая
							предпринимательская платформа, где партнеры операторов могут
							развивать бизнес с поддержкой разнонаправленных сервисов.
						</p>
						<p className={styles.content_text}>
							Один из таких проектов — рекламный инструмент для предпринимателей
							СДЭК.Медиа. Благодаря ему компании могут использовать площадки
							оператора для продвижения своих товаров и услуг: в офисах, в
							приложении и на сайте. А платежный сервис CDEK PAY позволяет
							компаниям выгодно принимать все виды онлайн-платежей от физлиц и
							бизнеса, использовать офлайн-терминалы — и упрощает расчеты для
							всех участников.
						</p>
						<blockquote className={styles.content_quote}>
							<p className={styles.content_quote_text}>
								«Поясню на примере. Продавцы продвигают свои товары через сервис
								размещения рекламы СДЭК Медиа. Мы эти товары доставляем
								покупателям, а все расчеты проходят через платежный агрегатор
								CDEK PAY. Еще пример — маркетплейс зарубежных товаров СДЭК
								Shopping, который мы перезапустили после ухода из России ряда
								иностранных брендов. Проект помогает компании развивать свое
								международное присутствие и тоже использует сервисы CDEK PAY и
								СДЭК Медиа»
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
			backgroundImage='/future.png'
			title='Взгляд в будущее'
		/>
		<div className={styles.main_wrapper}>
			<div className={styles.main_content}>
				<div className={styles.content_first}>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_first_title}>
							Взгляд в будущее: что изменится в логистике завтра
						</h2>
						<p className={styles.content_text}>
							Три тенденции, которые с высокой вероятностью станут массовыми в
							ближайшее время, — прогноз экспертов СДЭК:
						</p>
					</Fade>
				</div>
				<div className={styles.content_second}>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Развитие нелогистических услуг для бизнеса.
						</h2>
						<p className={styles.content_text}>
							По мере роста маркетплейсов работа с ними становится для продавцов
							менее выгодной из-за высокой конкуренции и сопутствующих расходов.
							Селлеры открывают собственные интернет-магазины, их количество
							снова увеличивается. А вместе с тем — и спрос на открытые
							предпринимательские платформы. Логистические операторы
							окончательно перестанут восприниматься как исключительно сервисы
							обработки и доставки грузов: выиграют те, кто будет оказывать
							комплексные услуги — от сервисов приема платежей до возможностей
							продвижения.
						</p>
					</Fade>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Еще большая гибкость параметров доставки
						</h2>
						<p className={styles.content_text}>
							Российский логистический сервис смог стать одним из лучших во
							многом благодаря ориентированности на запросы конечного
							получателя. Так будет и дальше. В частности, появится больше
							опций, которые можно настраивать на ходу в последний момент.
							Например, добавлять и убирать товары из уже собранного заказа или
							менять время и адрес доставки даже после того, как груз передан
							курьеру.
						</p>
					</Fade>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Развитие сетей постаматов и объединенные ПВЗ
						</h2>
						<p className={styles.content_text}>
							Постаматы в каждом доме (по примеру Китая) упростят процесс
							получения заказов. А мультибрендовые пункты выдачи позволят
							сделать логистику «последней мили» дешевле за счет экономии на
							арендных площадях. К тому же забирать все заказы в одном месте —
							это удобно.
						</p>
					</Fade>
					<Fade triggerOnce direction='up'>
						<h2 className={styles.content_second_title}>
							Активное внедрение искусственного интеллекта
						</h2>
						<p className={styles.content_text}>
							ИИ уже стал частью глобального тренда на цифровизацию и
							автоматизацию. В частности, нейросети помогают строить
							транспортные маршруты, отвечать на запросы в службу поддержки и
							даже искать потерявшиеся отправления по фото. В перспективе
							нейросети возьмут на себя ещё больше задач – от прогнозирования
							спроса до автономного управления процессом доставки.
						</p>
					</Fade>
				</div>
			</div>
		</div>
	</main>
)

export default function Home() {
	const { width } = useWindowDimensions()
	return (
		<>
			<Head>
				<title>Маршрут российской логистики</title>
			</Head>
			<div className={cn(myFont.className)}>
				<Header />
				<Main />
				<Footer width={width} />
			</div>
		</>
	)
}
