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
      path: './fonts/TTFirsBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsMedium.woff2',
      weight: '400',
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
      </Head>
      <div>
        <Header />
        <Main />
        <Footer width={width} />
      </div>
    </>
  );
}
