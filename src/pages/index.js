import localFont from 'next/font/local';
import style from './style.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { useEffect } from 'react';

const myFont = localFont({
  src: [
    {
      path: './fonts/TTFirsNeueMedium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsNeueRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function Home() {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <>
      {/* <Head>
        <title>12 ошибок бизнеса и как из избежать</title>
        <meta
          key='description'
          name='description'
          content='Что нужно учесть новому поколению предпринимателей'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Что нужно учесть новому поколению предпринимателей'
        />
        <meta
          key='title'
          name='title'
          content='12 ошибок бизнеса и как их избежать'
        />
        <meta
          key='og:title'
          property='og:title'
          content='12 ошибок бизнеса и как их избежать'
        />
        <meta property='og:site_name' content='crpa.vedomosti' />
        <meta name='twitter:image' content='/og-image-tg.jpg' />
        <meta property='twitter:image:width' content='1012' />
        <meta property='twitter:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='vk:image' content='/og-image-vk.jpg' />
        <meta property='vk:image:width' content='510' />
        <meta property='vk:image:height' content='228' />
        <meta property='og:image' content='/og-image-tg.jpg' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:height' content='800' />
        <link rel='icon' href='/favicon16.svg' sizes='16x16' type='image/png' />
        <link
          rel='icon'
          href='/favicon32.svg'
          sizes='16x16 32x32'
          type='image/vnd.microsoft.icon'
        />
        <link
          rel='icon'
          href='/favicon64.svg'
          sizes='any'
          type='image/svg+xml'
        />
      </Head> */}
      <div className={cn(myFont.className, style.wrapper)}>
        <header className={style.header}>
          <a target='_blank' href=''>
            <Image
              width={247}
              height={23}
              alt='Логотип Xota и Модус'
              src='/header/modus.svg'
              className={style.headerModus}
              priority
            />
          </a>
          <a target='_blank' href=''>
            <Image
              width={20}
              height={20}
              src='/header/closeIcon.svg'
              className={style.headerCloseIcon}
            />
          </a>
          <a target='_blank' href=''>
            <Image
              width={110}
              height={20}
              alt='Логотип Ведомости'
              src='/header/vedomosty.svg'
              className={style.headerVedomosty}
              priority
            />
          </a>
        </header>
        <main className={style.main}>
          <h1 className={style.title}>В&nbsp;поиске контакта</h1>
          <div className={style.content}>
            <p className={cn(style.contentLeft, 'animation')}>
              Как лидеры российского бизнеса адаптируются к изменениям в
              потребительском поведении и экономике
            </p>
            <p className={cn(style.contentRight, 'animation')}>
              Скорость трансформационных процессов стремительно растет — сегодня
              компаниям приходится внедрять инновации и адаптировать стратегии в
              считанные недели. Чтобы понять, какие факторы больше всего
              повлияли на потребление в ключевых отраслях российского бизнеса и
              как бизнес приспосабливался к этим переменам, CRM-платформа НОТА
              МОДУС (холдинг Т1) провела масштабное исследование. В нем приняли
              участие более 150 директоров по маркетингу и клиентскому сервису в
              11 отраслях экономики.
            </p>
          </div>
          <p className={cn(style.description, 'animation')}>
            Внутри: ключевые тренды и вызовы последних двух лет, решения,
            которые принимали компании, с детализацией по отраслям и сегментам
            B2B/B2C.
          </p>
        </main>
        <footer className={style.footer}>
          <a
            download
            target='_blank'
            href='/pdf/НОТА_МОДУС_Взаимодействие_с_клиентами1.pdf'
            className={style.footerButton}
          >
            Скачать исследование
          </a>
        </footer>
      </div>
    </>
  );
}
