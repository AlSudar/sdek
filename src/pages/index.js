import cn from 'classnames';
import Head from 'next/head';
import localFont from 'next/font/local'
// стили пишем тут, в styles
import styles from './style.module.scss'
import Image from 'next/image';

const myFont = localFont({
	src: [
		{
			path: './fonts/TTFirsRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/TTFirsMedium.ttf',
			weight: '500',
			style: 'normal',
		}
	]
})

export default function Home() {

	return (
		<>
			<Head>
			</Head>
			<div className={cn(myFont.className)}>
				{/*тут пишем верстку всю*/}
				<p className={styles.example}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro ullam maiores accusantium consequuntur id nam expedita corporis repellat reprehenderit facere deleniti quisquam tenetur vel error voluptate, iste est similique?</p>
				<Image className={styles.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Nklt3m299QN1HvIQBJIZLTdYosRVio2CQA&s' alt='' width={100} height={100} />
			</div>
		</>
	);
}
