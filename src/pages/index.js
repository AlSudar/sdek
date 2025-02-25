// if (twoThousandthsElement) {
//   if (
//     currentScrollRef.current === 0 &&
//     window.scrollY >
//       twoThousandthsElement.offsetTop -
//         timeLineMobileRef.current.clientHeight
//   ) {
//     currentScrollRef.current -= FIRST_ELEMENT_MENU_WIDTH;

//     timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
//   }
// }

// if (twoThousandAndTenthElement) {
//   if (
//     currentScrollRef.current === -FIRST_ELEMENT_MENU_WIDTH &&
//     window.scrollY >
//       twoThousandAndTenthElement.offsetTop -
//         timeLineMobileRef.current.clientHeight
//   ) {
//     currentScrollRef.current = -(
//       FIRST_ELEMENT_MENU_WIDTH + SECOND_ELEMENT_MENU_WIDTH
//     );

//     timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
//   }
// }

// if (twoThousandAndTwentyElement) {
//   if (
//     currentScrollRef.current ===
//       -(FIRST_ELEMENT_MENU_WIDTH + SECOND_ELEMENT_MENU_WIDTH) &&
//     window.scrollY >
//       twoThousandAndTwentyElement.offsetTop -
//         timeLineMobileRef.current.clientHeight
//   ) {
//     currentScrollRef.current = -(
//       FIRST_ELEMENT_MENU_WIDTH +
//       SECOND_ELEMENT_MENU_WIDTH +
//       THIRD_ELEMENT_MENU_WIDTH
//     );
//   }
// }

// if (futureElement) {
//   if (
//     currentScrollRef.current ===
//       -(
//         FIRST_ELEMENT_MENU_WIDTH +
//         SECOND_ELEMENT_MENU_WIDTH +
//         THIRD_ELEMENT_MENU_WIDTH
//       ) &&
//     window.scrollY >
//       futureElement.offsetTop - timeLineMobileRef.current.clientHeight
//   ) {
//     currentScrollRef.current = -(
//       FIRST_ELEMENT_MENU_WIDTH +
//       SECOND_ELEMENT_MENU_WIDTH +
//       THIRD_ELEMENT_MENU_WIDTH +
//       FOUR_ELEMENT_MENU_WIDTH
//     );
//   }
// }

import Head from 'next/head';
import localFont from 'next/font/local';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import useWindowDimensions from '../utils/index';
import { Main } from '../components/Main';
import { TimeLineMobile } from '@/components/TimeLineMobile';
import { useRef, useEffect, useCallback } from 'react';

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

const GAP_WIDTH = 24;
const FIRST_ELEMENT_MENU_WIDTH = 124 + GAP_WIDTH;
const SECOND_ELEMENT_MENU_WIDTH = 103 + GAP_WIDTH;
const THIRD_ELEMENT_MENU_WIDTH = 168 + GAP_WIDTH;
const FOUR_ELEMENT_MENU_WIDTH = 138 + GAP_WIDTH;
// const FIVE_ELEMENT_MENU_WIDTH = 152 + GAP_WIDTH;

export default function Home() {
  const { width } = useWindowDimensions();
  const headerRef = useRef();
  const timeLineMobileRef = useRef();
  const currentScrollRef = useRef(0);
  const menuTabActiveRef = useRef();

  const setVisibleMenu = useCallback(() => {
    if (width && width < 680) {
      if (headerRef.current.clientHeight < window.scrollY + 100) {
        timeLineMobileRef.current.style.display = 'block';
      } else {
        timeLineMobileRef.current.style.display = 'none';
      }
    }
  }, [width, headerRef]);

  const setActiveTimeLine = useCallback(() => {
    const timeLineMobileElement = document.getElementById('time-line-mobile');
    // экраны с цифрами
    const firstElement = document.getElementById('2000');
    const secondElement = document.getElementById('2010');
    const thirdElement = document.getElementById('2020');
    const fourElement = document.getElementById('future');

    // контент под экранами с цифрами
    const firstContentElement = document.getElementById('main-content-1990');
    const secondContentElement = document.getElementById('main-content-2000');
    const thirdContentElement = document.getElementById('main-content-2010');
    const fourContentElement = document.getElementById('main-content-2020');
    const fiveContentElement = document.getElementById('main-content-future');

    if (timeLineMobileRef && timeLineMobileRef.current) {
      if (
        window.scrollY <
          firstElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        menuTabActiveRef.current !== 0
      ) {
        currentScrollRef.current = 0;
        menuTabActiveRef.current = 0;
        timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
      }

      if (
        window.scrollY >
          firstElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        window.scrollY <
          secondElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        menuTabActiveRef.current !== 1
      ) {
        currentScrollRef.current = -FIRST_ELEMENT_MENU_WIDTH;
        menuTabActiveRef.current = 1;
        timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
      }

      if (
        window.scrollY >
          secondElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        window.scrollY <
          thirdElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        menuTabActiveRef.current !== 2
      ) {
        currentScrollRef.current = -(
          FIRST_ELEMENT_MENU_WIDTH + SECOND_ELEMENT_MENU_WIDTH
        );
        menuTabActiveRef.current = 2;
        timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
      }

      if (
        window.scrollY >
          thirdElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        window.scrollY <
          fourElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        menuTabActiveRef.current !== 3
      ) {
        currentScrollRef.current = -(
          FIRST_ELEMENT_MENU_WIDTH +
          SECOND_ELEMENT_MENU_WIDTH +
          THIRD_ELEMENT_MENU_WIDTH
        );
        menuTabActiveRef.current = 3;
        timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
      }

      if (
        window.scrollY >
          fourElement.offsetTop - timeLineMobileRef.current.clientHeight &&
        menuTabActiveRef.current !== 4
      ) {
        // currentScrollRef.current = -(
        //   FIRST_ELEMENT_MENU_WIDTH +
        //   SECOND_ELEMENT_MENU_WIDTH +
        //   THIRD_ELEMENT_MENU_WIDTH +
        //   FOUR_ELEMENT_MENU_WIDTH
        // );
        menuTabActiveRef.current = 4;
        // timeLineMobileElement.style.transform = `translateX(${currentScrollRef.current}px)`;
      }

      timeLineMobileElement.querySelectorAll('li').forEach((item, id) => {
        if (id === menuTabActiveRef.current) {
          item.classList.add('list-item-animated');
        } else {
          item.querySelector('#time-line-mobile-item').style.width = '0';
          item.classList.remove('list-item-animated');
        }

        if (id < menuTabActiveRef.current) {
          item.classList.add('list-item-active');
        } else {
          item.classList.remove('list-item-active');
        }
      });

      // получаем текущий элемент чей прогресс проскролла отслеживаем
      const currentContent =
        menuTabActiveRef.current === 0
          ? firstContentElement
          : menuTabActiveRef.current === 1
          ? secondContentElement
          : menuTabActiveRef.current === 2
          ? thirdContentElement
          : menuTabActiveRef.current === 3
          ? fourContentElement
          : fiveContentElement;
      const currentAnimatedListItem = document.querySelector(
        '.list-item-animated'
      );

      // TODO: тут явно костыльное решение,  нужно прорефакторить и понять че за 620 и че за 160
      // исключаем из window.scrollY все предыдущие проскроленные элементы
      let currentWindowScrollY = window.scrollY;
      if (menuTabActiveRef.current === 0) {
        currentWindowScrollY += -(headerRef.current.clientHeight - 100);
      }

      if (menuTabActiveRef.current === 1) {
        currentWindowScrollY += -(
          headerRef.current.clientHeight -
          100 +
          (firstContentElement.clientHeight + 620)
        );
      }

      if (menuTabActiveRef.current === 2) {
        currentWindowScrollY += -(
          headerRef.current.clientHeight -
          100 +
          (firstContentElement.clientHeight +
            secondContentElement.clientHeight +
            1240)
        );
      }

      if (menuTabActiveRef.current === 3) {
        currentWindowScrollY += -(
          headerRef.current.clientHeight -
          100 +
          (firstContentElement.clientHeight +
            secondContentElement.clientHeight +
            thirdContentElement.clientHeight +
            2040)
        );
      }

      const currentProsent =
        Number(
          currentWindowScrollY / (currentContent.clientHeight + 160)
        ).toFixed(2) * 100;
      currentAnimatedListItem.querySelector(
        '#time-line-mobile-item'
      ).style.width = `${currentProsent}%`;
    }
  }, []);

  useEffect(() => {
    setVisibleMenu();
    setActiveTimeLine();
  }, [setVisibleMenu, setActiveTimeLine]);

  useEffect(() => {
    if (width && width < 680) {
      const scroll = (e) => {
        setVisibleMenu();
        setActiveTimeLine();
      };

      document.addEventListener('scroll', scroll);

      return () => document.removeEventListener('scroll', scroll);
    }
  }, [setVisibleMenu, setActiveTimeLine]);

  return (
    <>
      <Head>
        <title>Логистика в России: история развития и тренды</title>
        <meta
          key='description'
          name='description'
          content='От зарождения рынка до сервиса мирового уровня'
        />
        <meta
          key='og:description'
          property='og:description'
          content='От зарождения рынка до сервиса мирового уровня'
        />
        <meta
          key='title'
          name='title'
          content='Логистика в России: история развития и тренды
'
        />
        <meta
          key='og:title'
          property='og:title'
          content='Логистика в России: история развития и тренды'
        />
        <meta property='og:site_name' content='cdek25.vedomosti.ru' />
        <meta property='twitter:image:width' content='1012' />
        <meta property='twitter:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='vk:image:width' content='510' />
        <meta property='vk:image:height' content='228' />
        <meta property='vk:image' content='/main-og-image.png' />
        <meta name='twitter:image' content='/main-og-image.png' />
        <meta property='og:image' content='/main-og-image.png' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:height' content='800' />
        <link rel='icon' href='/favicon16.png' sizes='16x16' type='image/png' />
        <link rel='icon' href='/favicon32.ico' />
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
        <Header headerRef={headerRef} />
        {width && width < 680 && (
          <TimeLineMobile timeLineMobileRef={timeLineMobileRef} />
        )}
        <Main />
        <Footer width={width} />
      </div>
    </>
  );
}
