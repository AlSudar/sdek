import cn from 'classnames';
import Head from 'next/head';
import { Header } from '../layouts/Header/index';
import { Footer } from '../layouts/Footer';
import { Roboto } from 'next/font/google'
import { Hero } from '../pagesComponents/Main/Hero';
import { ContentWrapper } from '../layouts/ContentWrapper';
import styles from './style.module.scss'
import { ModernEconomy } from '../pagesComponents/Main/ModernEconomy';
import { WarehouseSpace } from '../pagesComponents/Main/WarehouseSpace';
import { CausesDeficiency } from '../pagesComponents/Main/CausesDeficiency';
import { OperatingWarehouses } from '../pagesComponents/Main/OperatingWarehouses';
import { ActionList } from '../pagesComponents/Main/ActionList';
import { Cases } from '../pagesComponents/Main/Cases';
import { AutomatesRussia } from '../pagesComponents/Main/AutomatesRussia';
import { SectionImage } from '../components/SectionImage/index'

const myFont = Roboto({ subsets: ["latin"], weight: ['300', '400', '500', '900'] });

export default function Home() {

	return (
		<>
			<Head>
				<title>заголовок</title>
				<meta
					key='description'
					name='description'
					content='описание'
				/>
				<meta
					key='og:description'
					property='og:description'
					content='описание'
				/>
				<meta
					key='title'
					name='title'
					content='заголовок'
				/>
				<meta
					key='og:title'
					property='og:title'
					content='заголовок'
				/>
				<meta property='og:site_name' content='comitas.vedomosti.ru' />
				<meta property='twitter:image:width' content='1012' />
				<meta property='twitter:image:height' content='506' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='vk:image:width' content='510' />
				<meta property='vk:image:height' content='228' />
				<meta property='vk:image' content='/og-image.jpg' />
				<meta name='twitter:image' content='/og-image.jpg' />
				<meta property='og:image' content='/og-image.jpg' />
				<meta property='og:image:width' content='800' />
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:height' content='800' />
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
			<div className={cn(myFont.className)}>
				<Header />
				<Hero />
				<div className={styles.content}>
					<ContentWrapper className={cn(styles.firstBlock, styles.wrapper)}>
						<ModernEconomy />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.secondBlock, styles.wrapper)}>
						<WarehouseSpace />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.thirdBlock, styles.wrapper)}>
						<CausesDeficiency />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.thirdBlock, styles.wrapper)}>
						<OperatingWarehouses />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.fourBlock, styles.wrapper)}>
						<ActionList />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.sixBlock, styles.wrapper)}>
						<Cases />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.sevenBlock, styles.wrapper)}>
						<AutomatesRussia />
					</ContentWrapper>
					<SectionImage imageSrc='/main/automatesRussia/image.jpg' />
				</div>
				<Footer />
			</div>
		</>
	);
}
