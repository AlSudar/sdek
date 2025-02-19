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
      </Head>
      <div className={myFont.className}>
        <Header />
        <Main />
        <Footer width={width} />
      </div>
    </>
  );
}
