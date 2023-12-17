import localFont from 'next/font/local';
import style from './style.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { useEffect } from 'react';
import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Header } from '@/layouts/Header';
import { Banner } from '@/components/Banner';
import { SalesCommunications } from '@/components/SalesCommunications';
import { AverageBill } from '@/components/AverageBill';
import { CJM } from '@/components/CJM';
import { Hyperautomation } from '@/components/Hyperautomation';
import { Personalizacia } from '@/components/Personalizacia';
import { B2BSector } from '@/components/b2bSector';
import { KeyToSustainability } from '@/components/KeyToSustainability';
import { Footer } from '@/layouts/Footer';
import useWindowDimensions from '@/utils';

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
  const { width } = useWindowDimensions();
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('animation-first-show');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation-first');
    let elementsFirst = document.querySelectorAll(
      '.animation-without-transform-first'
    );
    let elementsSecond = document.querySelectorAll(
      '.animation-without-transform-second'
    );
    let elementsThird = document.querySelectorAll(
      '.animation-without-transform-third'
    );
    for (let elm of elementsFirst) {
      observer.observe(elm);
    }

    for (let elm of elementsSecond) {
      observer.observe(elm);
    }

    for (let elm of elementsThird) {
      observer.observe(elm);
    }

    for (let elm of elements) {
      observer.observe(elm);
    }
  }, [width]);

  return (
    <>
      <Head>
        <title>В поиске контакта</title>
        <meta
          key='description'
          name='description'
          content='Как лидеры российского бизнеса адаптируются к изменениям
          в потребительском поведении и экономике'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Как лидеры российского бизнеса адаптируются к изменениям
          в потребительском поведении и экономике'
        />
        <meta key='title' name='title' content='В поиске контакта' />
        <meta key='og:title' property='og:title' content='В поиске контакта' />
        <meta property='og:site_name' content='nota-modus.vedomosti.ru' />
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
      </Head>
      <div className={cn(myFont.className)}>
        <div className={cn(style.wrapper)}>
          <Image
            width={100}
            height={100}
            alt='1'
            src='/background.png'
            className={style.background}
            priority
            objectFit='cover'
          />
          <Header />
          <Hero />
        </div>
        <div className={cn(style.bannerBulgakov)}>
          <Banner
            withoutMargin={true}
            bannerBg='#928CFF'
            desc='&laquo;Мир меняется, а&nbsp;вместе с&nbsp;ним меняются и&nbsp;предпочтения клиентов. Чтобы быть конкурентоспособным и&nbsp;прибыльным, в&nbsp;наше время важно понимать тренды и&nbsp;изменения, происходящие на&nbsp;рынке и&nbsp;в&nbsp;различных его сегментах, а&nbsp;также обладать знаниями о&nbsp;передовых инструментах, которые позволяют воплощать все задумки и&nbsp;быстро подстраиваться под изменяющиеся внешние условия. Уверен, что наше исследование будет источником вдохновения и&nbsp;полезным инструментом для каждого, кто стремится к&nbsp;развитию своего бизнеса и&nbsp;улучшению качества конверсии воронки продаж&raquo;.'
            author='Кирилл Булгаков, заместитель <br />генерального директора по&nbsp;программным продуктам и&nbsp;сервисам Холдинга&nbsp;Т1,<br /> управляющий директор российского вендора НОТА (16+) Холдинга&nbsp;Т1'
            imgAuthorSrc='/banners/bulgakov.png'
          />
        </div>
        <SalesCommunications />
        <AverageBill />
        <div className={style.bannerMinaev}>
          <Banner
            bannerBg='#6C49D6'
            desc='&laquo;Рынок онлайн-продаж растет высокими темпами, более&nbsp;30% за&nbsp;2022&nbsp;год, при этом основной вклад в&nbsp;этот рост делают именно крупнейшие маркетплейсы. Их&nbsp;преимущество&nbsp;&mdash; доступность товара для покупателей по&nbsp;всей России, внутренняя и&nbsp;внешняя логистика для продавцов&raquo;.'
            author='Алексей Минаев, заместитель <br /> управляющего директора компании Ozon'
          />
        </div>
        <CJM />
        <Hyperautomation />
        <div className={style.bannerSerova}>
          <Banner
            bannerBg='#6C49D6'
            desc='&laquo;Email рассылки, чат-боты, социальные сети, маркетинг, рекламные компании&nbsp;&mdash; это настолько устоялось, что&nbsp;должны быть уже роботизированные системы&raquo;.'
            author='Екатерина Серова, директор по&nbsp;маркетингу <br />  компании Major Express'
          />
        </div>
        <Personalizacia />
        <B2BSector />
        <KeyToSustainability />
        <Footer />
      </div>
    </>
  );
}
