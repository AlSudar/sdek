import Head from 'next/head';
import { Header } from '@/layouts/Header/index';
import styles from '@/styles/index.module.scss';
import { DescriptionProject } from '@/components/DescriptionProject/index';
import { PlayBanner } from '@/components/PlayBanner';
import { JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/layouts/Footer';
import { FinalBlock } from '@/components/FinalBlock';
import { Block } from '@/components/Block';
import {
  dataFirstSlider,
  dataFiveSlider,
  dataFourSlider,
  dataSecondSlider,
  dataThirdSlider,
} from '@/data/sliders';
import Image from 'next/image';
import stylesImage from '@/components/Block/index.module.scss';
import cn from 'classnames';
import useWindowDimensions from '@/utils';

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const { width } = useWindowDimensions();
  //TODO: заменить seo-картинки
  return (
    <>
      <Head>
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
          content='12 ошибок бизнеса и как из избежать'
        />
        <meta
          key='og:title'
          property='og:title'
          content='12 ошибок бизнеса и как из избежать'
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
      </Head>
      <div className={jetBrainsMono.className}>
        <Header />
        <main className={`${styles.main}`}>
          <DescriptionProject
            description='Какие ошибки допускает бизнес и&nbsp;что нужно учесть новому поколению предпринимателей'
            title={'работа без ошибок'}
          />
          <Block
            blockClassName='firstBlock'
            id='at-the-start'
            image={
              <div
                className={cn(
                  stylesImage.wrapperImage,
                  stylesImage.wrapperFirstImage
                )}
              >
                <Image
                  alt=''
                  width={550}
                  height={409}
                  className={cn(stylesImage.firstImage, stylesImage.image)}
                  src='/Sliders/firstBlockImage.png'
                />
              </div>
            }
            content={dataFirstSlider}
            blockTitle='На старте'
            titleClassName={stylesImage.firstTitle}
          />
          <Block
            id='mergers-and-acquisitions'
            image={
              <div
                className={cn(
                  stylesImage.wrapperImage,
                  stylesImage.wrapperSecondImage
                )}
              >
                <Image
                  alt=''
                  width={470}
                  height={415}
                  className={cn(stylesImage.secondImage, stylesImage.image)}
                  src='/Sliders/secondBlockImage.png'
                />
              </div>
            }
            content={dataSecondSlider}
            blockTitle='Слияния и&nbsp;поглощения'
            titleClassName={stylesImage.secondTitle}
          />
          <PlayBanner />
          <Block
            id='corporate-conflicts'
            image={
              <div
                className={cn(
                  stylesImage.wrapperImage,
                  stylesImage.wrapperThirdImage
                )}
              >
                <Image
                  alt=''
                  width={362}
                  height={423}
                  className={cn(stylesImage.thirdImage, stylesImage.image)}
                  src='/Sliders/thirdBlockImage.png'
                />
              </div>
            }
            content={dataThirdSlider}
            blockTitle='Корпоративные конфликты'
            titleClassName={stylesImage.thirdTitle}
          />
          <Block
            id='litigation'
            image={
              <div
                className={cn(
                  stylesImage.wrapperImage,
                  stylesImage.wrapperFourImage
                )}
              >
                <Image
                  alt=''
                  width={550}
                  height={470}
                  className={cn(stylesImage.fourImage, stylesImage.image)}
                  src={
                    width > 680
                      ? '/Sliders/fourBlockImage.png'
                      : '/Sliders/fourMobileBlockImage.png'
                  }
                />
              </div>
            }
            content={dataFourSlider}
            blockTitle='Судебные споры'
            titleClassName={stylesImage.fourTitle}
          />
          <Block
            id='bankruptcy'
            content={dataFiveSlider}
            blockTitle='Банкротство'
            titleClassName={stylesImage.fiveTitle}
            linesBlockClassName='linesAnimationShowLast'
            image={
              <div
                className={cn(
                  stylesImage.wrapperImage,
                  stylesImage.wrapperFiveImage
                )}
              >
                <Image
                  alt=''
                  width={550}
                  height={470}
                  className={cn(stylesImage.fiveImage, stylesImage.image)}
                  src='/Sliders/fiveBlockImage.png'
                />
              </div>
            }
          />
          <FinalBlock />
        </main>
        <Footer />
      </div>
    </>
  );
}
