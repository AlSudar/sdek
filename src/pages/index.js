import Head from 'next/head';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { TitleSection } from '@/components/TitleSection';
import { Preview } from '@/components/Preview';
import { Footer } from '@/components/Footer';
import { Slider } from '@/components/Slider';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from '@/styles/index.module.scss';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const firstSliderSrcMock = [
  '/firstSection/slider/first.jpg',
  '/firstSection/slider/second.jpg',
  '/firstSection/slider/third.jpg',
  '/firstSection/slider/five.jpg',
  '/firstSection/slider/six.jpg',
  '/firstSection/slider/seven.jpg',
];

const secondSliderSrcMock = [
  '/fourSection/slider/first.jpg',
  '/fourSection/slider/second.jpg',
  '/fourSection/slider/third.jpg',
  '/fourSection/slider/five.jpg',
  '/fourSection/slider/six.jpg',
  '/fourSection/slider/seven.jpg',
  '/fourSection/slider/eitght.jpg',
  '/fourSection/slider/nine.jpg',
];

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

export default function Home() {
  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <>
      {/* TODO: дописать нормальный мета и sh */}
      <Head>
        <title>Идеальный дом</title>
        <meta
          key='description'
          name='description'
          content='Отвечаем на основе научных исследований, статистики и опросов'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Отвечаем на основе научных исследований, статистики и опросов'
        />
        <meta
          key='title'
          name='title'
          content='Каким должен быть идеальный дом'
        />
        <meta
          key='og:title'
          property='og:title'
          content='Каким должен быть идеальный дом'
        />
        <meta property='og:site_name' content='riverpark-kutuzovskiy' />
        <meta property='og:image' content='/og-twitter.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Preview />
        <Section background='#2B2D31' color='#FFF'>
          <TitleSection
            srcImg='/firstSection/epicentr-biznesa.png'
            text='В эпицентре бизнеса'
          />
          <Text text='Одно из&nbsp;главных преимуществ жизни здесь&nbsp;&mdash; расположение. Две видовые башни находятся на&nbsp;перекрестке деловых маршрутов не&nbsp;только столицы, но&nbsp;и&nbsp;всей страны. Рядом с&nbsp;домом несколько бизнес-центров, а&nbsp;из&nbsp;окон открывается вид на&nbsp;центры принятия решений&nbsp;&mdash; Кремль и&nbsp;небоскребы Москва-Сити.' />
          <Slider imagesSrc={firstSliderSrcMock} />
          <Text
            horizontalMargin='right'
            text='Садовое кольцо и&nbsp;набережные Москвы-реки и&nbsp;Яузы, Третье транспортное и&nbsp;главные железнодорожные узлы делают доступными многие популярные направления. В&nbsp;доме есть подземный четырехэтажный паркинг с&nbsp;возможностью зарядить электромобиль.<br /><br />
          С&nbsp;территории комплекса можно выехать в&nbsp;обе стороны Садового кольца и&nbsp;быстро добраться до&nbsp;офиса. К&nbsp;тому&nbsp;же для резидентов &laquo;Дома Chkalov&raquo; предусмотрена отдельная полоса подъезда со&nbsp;стороны Сыромятнического переулка. А&nbsp;близость к&nbsp;Курскому вокзалу позволяет без проблем ездить в&nbsp;командировки и&nbsp;не&nbsp;беспокоиться о&nbsp;пробках даже в&nbsp;часы пик.'
          />
          <div className={styles.firstImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={560}
              height={360}
              priority={false}
              src='/firstSection/imagesBlock/first.png'
              alt=''
            />
            <Image
              className={`${styles.firstSupImage} element-animation`}
              width={336}
              height={237}
              priority={false}
              src='/firstSection/imagesBlock/firstSup.png'
              alt=''
            />
          </div>
        </Section>
        <Section background='#FFF' color='#141414'>
          <TitleSection
            srcImg='/secondSection/epicentr-kultury.png'
            text='В эпицентре культуры'
          />
          <Text text='&laquo;Дом Chkalov&raquo; находится в&nbsp;самом сердце Басманного района, в&nbsp;пешей доступности от&nbsp;главных точек притяжения культурной жизни столицы: парка &laquo;Зарядье&raquo;, арт-кластеров ЦСИ &laquo;Винзавод&raquo; и&nbsp;Artplay, театральных площадок &laquo;Современника&raquo; и&nbsp;&laquo;Гоголь-центра&raquo;. Это среда, которая помогает наполняться энергией мегаполиса.' />
          <div className={styles.secondImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={848}
              height={301}
              priority={false}
              src='/secondSection/imagesBlock/first.png'
              alt=''
            />
            <Image
              className={`${styles.secondSupImage} element-animation`}
              width={273}
              height={311}
              priority={false}
              src='/secondSection/imagesBlock/firstSup.png'
              alt=''
            />
          </div>
          <Text
            horizontalMargin='right'
            text='Буквально под окнами вьются лабиринты китайгородских переулков с&nbsp;уютными кафе и&nbsp;галереями, чуть дальше&nbsp;&mdash; бульварное кольцо, где круглые сутки кипит жизнь. В&nbsp;5&nbsp;минутах&nbsp;&mdash; зеленые зоны сада&nbsp;им. Баумана, усадьбы Строгановых и&nbsp;парка-усадьбы Усачевых-Найденовых.'
          />
          <div className={styles.thirdImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={559}
              height={330}
              priority={false}
              src='/secondSection/imagesBlock/second.png'
              alt=''
            />
            <Image
              className={`${styles.thirdSupImage} element-animation`}
              width={338}
              height={272}
              priority={false}
              src='/secondSection/imagesBlock/secondSup.png'
              alt=''
            />
          </div>
        </Section>
        <Section background='#F0F0F0' color='#141414'>
          <TitleSection
            srcImg='/thirdSection/epicentr-life.png'
            text='В эпицентре жизни'
          />
          <Text
            text='Комплекс совмещает жилую среду со&nbsp;всей необходимой для жизни инфраструктурой. В&nbsp;пешей доступности детские сады, школы и&nbsp;престижные вузы, фитнес-клубы, поликлиники и&nbsp;медицинские центры. Благодаря этому, находясь в&nbsp;центре столицы, чувствуешь себя по-настоящему дома, где все под рукой. <br /><br />
          Концепция &laquo;Дома Chkalov&raquo;&nbsp;&mdash; residential retail*, этот формат уже зарекомендовал себя в&nbsp;Нью-Йорке, Лондоне, Сингапуре и&nbsp;других мегаполисах мира. Две башни с&nbsp;апартаментами объединены торговой галерей, которая занимает четыре нижних этажа комплекса. Здесь расположены магазины, фудкорты и&nbsp;рестораны. Для владельцев апартаментов предусмотрен собственный вход в&nbsp;торговую галерею.'
          />
          <div className={styles.fourImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={377}
              height={566}
              priority={false}
              src='/thirdSection/imagesBlock/first.png'
              alt=''
            />
            <Image
              className={`${styles.fourSupImage} element-animation`}
              width={890}
              height={835}
              priority={false}
              src='/thirdSection/imagesBlock/firstSup.png'
              alt=''
            />
          </div>
          <Text
            horizontalMargin='right'
            text='На&nbsp;4-м этаже расположена ресторанная зона. Отсюда резиденты и&nbsp;их&nbsp;гости могут выйти на&nbsp;веранду, которая находится выше всей окружающей застройки, и&nbsp;окинуть взглядом открывающуюся панораму на&nbsp;город. На&nbsp;5-м этаже клубная зона для жильцов&nbsp;&mdash; посторонние туда попасть не&nbsp;смогут. Здесь разместились коворкинг, велнес-клуб, студия йоги, лаундж с&nbsp;кинотеатром. <br /><br />
          При этом для жилых помещений предусмотрена собственная входная группа, которая позволяет разграничивать общественное и&nbsp;частное пространство. В&nbsp;лобби&nbsp;&mdash; зона ресепшена и&nbsp;техническая служба эксплуатации здания.'
          />

          <div className={styles.fiveImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={942}
              height={507}
              priority={false}
              src='/thirdSection/imagesBlock/second.png?version=1'
              alt=''
            />
            <Image
              className={styles.fiveSupImage}
              width={509}
              height={329}
              priority={false}
              src='/thirdSection/imagesBlock/secondSup.png'
              alt=''
            />
          </div>
        </Section>
        <Section background='#2B2D31' color='#FFF'>
          <TitleSection
            srcImg='/fourSection/epicentr-style.png'
            text='В эпицентре стиля'
          />
          <Text
            text='&laquo;Дом Chkalov&raquo; получил мировое признание, победив в&nbsp;трех номинациях European Property Awards 2021&ndash;2022. Над его созданием работали ведущие специалисты: архитектурное бюро SPEECH во&nbsp;главе с&nbsp;Сергеем Чобаном и&nbsp;лондонская дизайнерская студия Мартина Халберта. <br /><br />
          Застройщик комплекса&nbsp;&mdash; IKON Development&nbsp;&mdash; награжден Золотым знаком &laquo;Надежный застройщик России 2022&raquo;.'
          />
          <Slider imagesSrc={secondSliderSrcMock} />
          <Text
            horizontalMargin='right'
            text='Всего с&nbsp;6-го по&nbsp;21-й этаж комплекса расположено 396&nbsp;апартаментов. В&nbsp;зависимости от&nbsp;целей и&nbsp;эстетических предпочтений можно <a href="https://www.domchkalov.com/apartamenty/#flat" target="_blank" style="color: #B6815D">подобрать</a> подходящий вариант: пентхаус без отделки или видовые апартаменты, оформление в&nbsp;светлых тонах&nbsp;&mdash; &laquo;Рассвет&raquo;, с&nbsp;акцентами в&nbsp;темных тонах&nbsp;&mdash; &laquo;Закат&raquo;. <br /><br />
          Неповторимые виды, словно живые картины, дополняют интерьер апартаментов: из&nbsp;окон открываются потрясающие панорамы на&nbsp;исторические объекты центра Москвы: Кремль, Храм Христа Спасителя, сталинские высотки и&nbsp;другие столичные доминанты.'
          />
          <div className={styles.sixImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={904}
              height={474}
              priority={false}
              src='/fourSection/imagesBlock/first.png'
              alt=''
            />
            <Image
              className={`${styles.sixSupImage} element-animation`}
              width={448}
              height={306}
              priority={false}
              src='/fourSection/imagesBlock/firstSup.png'
              alt=''
            />
          </div>
          <Text
            horizontalMargin='left'
            text='Такая недвижимость, как &laquo;Дом Chkalov&raquo;,&nbsp;&mdash; это прежде всего инвестиция в&nbsp;собственную жизнь, чувство контроля над ней, комфорт и&nbsp;красоту. Вместе с&nbsp;тем это и&nbsp;надежный ликвидный актив, который не&nbsp;теряет актуальность и&nbsp;будет работать на&nbsp;вас в&nbsp;будущем.<br /><br />
          <a href="https://www.domchkalov.com/#flat" target="_blank" style="color: #B6815D">Оставьте заявку на&nbsp;нашем сайте</a> &nbsp;&mdash; специалисты ответят на&nbsp;вопросы и&nbsp;помогут подобрать оптимальный вариант с&nbsp;учетом ваших целей.<br /><br />
          <span class="tooltip">Реклама, ООО &laquo;Эссет менеджмент&raquo;, застройщик&nbsp;&mdash; Ikon Development, проектная декларация на&nbsp;сайте <a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82/7910?id=7910&objectIds=44218%2C44151%2C51567" target="_blank">наш.дом.рф</a></span>'
          />
          <div className={styles.sevenImagesContainer}>
            <Image
              className={`${styles.image} element-animation`}
              width={1009}
              height={536}
              priority={false}
              src='/fourSection/imagesBlock/second.png?version=1'
              alt=''
            />
            <Image
              className={`${styles.sevenSupImage} element-animation`}
              width={335}
              height={483}
              priority={false}
              src='/fourSection/imagesBlock/secondSup.png'
              alt=''
            />
          </div>
          <p className={styles.tooltip}>
            * Residential &amp;&nbsp;Retail ― формат новостроек, где жилье
            находится в одном здании с&nbsp;торговыми и&nbsp;коммерческими
            площадями. Это значит, что из своей квартиры на&nbsp;лифте можно
            спуститься в&nbsp;торговую галерею за покупками.
          </p>
        </Section>
        <Footer />
      </main>
    </>
  );
}
