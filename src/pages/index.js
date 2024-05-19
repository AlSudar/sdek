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
import { Quotes } from '../pagesComponents/Main/Quotes';
import { AutomationMarket } from '../pagesComponents/Main/AutomationMarket';
import { MainConsumers } from '../pagesComponents/Main/MainConsumers';
import { AutomationMarketList } from '../pagesComponents/Main/AutomationMarketList';
import { ShortagePickers } from '../pagesComponents/Main/ShortagePickers';
import { EfficiencyCompetitiveness } from '../pagesComponents/Main/EfficiencyCompetitiveness';
import { WarehouseOperations } from '../pagesComponents/Main/WarehouseOperations';
import { NumberEmployees } from '../pagesComponents/Main/NumberEmployees';
import { ProcessList } from '../pagesComponents/Main/ProcessList';
import { PaybackPeriod } from '../pagesComponents/Main/PaybackPeriod';
import { ImportSubstitution } from '../pagesComponents/Main/ImportSubstitution';
import { Last } from '../pagesComponents/Main/Last';

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
					<Quotes />
					<ContentWrapper className={cn(styles.sixBlock, styles.wrapper)}>
						<Cases />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.sevenBlock, styles.wrapper)}>
						<AutomatesRussia />
					</ContentWrapper>
					<SectionImage imageSrc='/main/automatesRussia/image.jpg' />
					<ContentWrapper className={cn(styles.eightBlock, styles.wrapper)}>
						<AutomationMarket />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.nineBlock, styles.wrapper)}>
						<AutomationMarketList />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.tenBlock, styles.wrapper)}>
						<MainConsumers />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.elevenBlock, styles.wrapper)}>
						<EfficiencyCompetitiveness />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.twelveBlock, styles.wrapper)}>
						<ShortagePickers />
					</ContentWrapper>
					<SectionImage text='автоматизация — средство выживания компаний' imageSrc='/main/survivalCompanies/image.jpg' />
					<ContentWrapper className={cn(styles.thirteenthBlock, styles.wrapper)}>
						<WarehouseOperations />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.fourteenthBlock, styles.wrapper)}>
						<ProcessList />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.fifteenthBlock, styles.wrapper)}>
						<NumberEmployees />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.sixteenhBlock, styles.wrapper)}>
						<PaybackPeriod />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.seventeenBlock, styles.wrapper)}>
						<ImportSubstitution />
					</ContentWrapper>
					<ContentWrapper className={cn(styles.eighteenBlock, styles.wrapper)}>
						<Last />
					</ContentWrapper>
				</div>
				<Footer />
			</div>
		</>
	);
}
