import { SectionDescription } from "../../../components/SectionDescription";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import styles from "./index.module.scss";
import Image from "next/image";

const ImportSubstitution = () => {
  return (
    <>
      <Image
        src="/main/importSubstitution/image.jpg"
        className={styles.image}
        width={504}
        height={386}
        alt=""
      />
      <div>
        <SectionSubtitle text="Как курс на&nbsp;импортозамещении отразился на&nbsp;вашей работе?" />
        <SectionDescription
          className={styles.desc}
          text="Еще 10&nbsp;лет назад&nbsp;99% нашего рынка было занято западными системными интеграторами. Примерно в&nbsp;тоже время мы&nbsp;приняли решение, что хотим составить конкуренцию зарубежным компаниям. Поэтому начали нанимать программистов и&nbsp;разрабатывать софт, который ставили на&nbsp;конвейеры и&nbsp;высокоскоростные сортировщики. <br /><br />
		  Сейчас практически все западные игроки ушли с&nbsp;российского рынка. Это отразилось на&nbsp;работе складов, оснащенных иностранным программным обеспечением. Часть из&nbsp;них до&nbsp;сих пор не&nbsp;работает, другие ждут, что ситуация изменится. Некоторым компаниям мы&nbsp;поставили ПО&nbsp;COMITAS. Наших клиентов сложности импортозамещения систем управления складов не&nbsp;коснулись, потому что у&nbsp;нас своя, отечественная. разработка.  <br /><br />
		  На&nbsp;мой взгляд, покупать&nbsp;ПО надо там, где зарегистрирована твоя компания. Это фундамент. Ведь риски иностранного программного обеспечения связаны не&nbsp;только с&nbsp;тем, что оно перестанет работать или его не&nbsp;будут поддерживать. Это еще сложности интеграции зарубежной WCS*-системы со&nbsp;складским оборудованием и&nbsp;ERP**-системой заказчика. Не&nbsp;всегда иностранное&nbsp;ПО даже русифицировано, что мешает управлять складом."
        />
        <p className={styles.bottom}>
          *WCS — система управления складом (Warehouse Control System) <br />{" "}
          **ERP — планирование ресурсов предприятий (Enterprise Resource
          Planning)
        </p>
      </div>
    </>
  );
};

export { ImportSubstitution };
