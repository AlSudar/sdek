import { WrapperBlock } from '../WrapperBlock';
import style from './index.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <WrapperBlock>
      <header className={style.headerWrapper}>
        <div className={style.header}>
          <a
            target='_blank'
            href='https://modus.nota.tech/?utm_source=vedomosti&utm_medium=project'
          >
            <Image
              width={247}
              height={23}
              alt='Логотип Xota и Модус'
              src='/header/modus.svg'
              className={style.headerModus}
              priority
            />
          </a>
          <div>
            <Image
              width={20}
              height={20}
              alt=''
              src='/header/closeIcon.svg'
              className={style.headerCloseIcon}
            />
          </div>
          <Image
            width={110}
            height={20}
            alt='Логотип Ведомости'
            src='/header/vedomosty.svg'
            className={style.headerVedomosty}
            priority
          />
        </div>
        <p className={style.headerAgeWrapper}>
          Cпециальный проект
          <span className={style.headerAge}>16+</span>
        </p>
      </header>
    </WrapperBlock>
  );
};

export { Header };
