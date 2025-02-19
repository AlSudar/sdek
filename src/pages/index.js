import cn from 'classnames';
import Head from 'next/head';
import localFont from 'next/font/local';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import useWindowDimensions from '../utils/index';
import { Main } from '../components/Main';

// Подключаем локальные шрифты
const myFont = localFont({
  src: [
    {
      path: './fonts/OnestLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/OnestSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OnestBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Head>
        <title>Маршрут российской логистики</title>
        {/* <meta
          key='description'
          name='description'
          content='Автоматизация складской логистики для развития бизнеса'
        />
        <meta
          key='og:description'
          property='og:description'
          content='Автоматизация складской логистики для развития бизнеса'
        />
        <meta key='title' name='title' content='Кто автоматизирует Россию' />
        <meta
          key='og:title'
          property='og:title'
          content='Кто автоматизирует Россию'
        />
        <meta property='og:site_name' content='comitas.vedomosti.ru' />
        <meta property='twitter:image:width' content='1012' />
        <meta property='twitter:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='vk:image:width' content='510' />
        <meta property='vk:image:height' content='228' />
        <meta property='vk:image' content='/main-og-image.jpg' />
        <meta name='twitter:image' content='/main-og-image.jpg' />
        <meta property='og:image' content='/main-og-image.jpg' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:height' content='800' /> */}
        <link rel='icon' href='/favicon16.png' sizes='16x16' type='image/png' />
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
      <div className={myFont.className}>
        <Header />
        <Main />
        <Footer width={width} />
      </div>
    </>
  );
}
