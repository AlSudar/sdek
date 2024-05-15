import Image from "next/image";
import styles from "./index.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";

const ModernEconomy = () => {
  return (
    <>
      <Image
        src="/main/modernEconomy/figure.png"
        alt=""
        width={504}
        height={324}
        className={styles.image}
      />
      <div>
        <SectionTitle text="Роль склада в&nbsp;современной экономике" />
        <SectionDescription text="Склады играют связующую роль&nbsp;&mdash; обеспечивают хранение и&nbsp;распределение товаров и&nbsp;оборудования по&nbsp;всей стране, стабильность поставок. Вместе с&nbsp;ростом объемов онлайн-торговли и&nbsp;количества отечественных производств, а&nbsp;также в&nbsp;связи с&nbsp;нестабильностью и&nbsp;переориентацией цепей поставок на&nbsp;восточное направление, значение складов и&nbsp;распределительных центров сильно выросло. Благодаря складским запасам компании справляются с&nbsp;колебаниями спроса и&nbsp;предложения, сезонными изменениями, минимизируют риски, связанные с&nbsp;санкционными ограничениями, изменением цепей поставок. Это позволяет избежать дефицита товаров, материалов и&nbsp;сырья для производства. В&nbsp;ключевых регионах сбыта компании могут хранить большие объемы товаров, то&nbsp;есть закупать их&nbsp;оптовыми партиями и&nbsp;экономить на&nbsp;масштабе. Это также позволяет сократить время доставки товаров потребителям и&nbsp;повысить уровень обслуживания клиентов." />
      </div>
    </>
  );
};

export { ModernEconomy };
