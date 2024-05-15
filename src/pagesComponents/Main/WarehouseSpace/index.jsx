import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import styles from "./index.module.scss";

const WarehouseSpace = () => {
  return (
    <>
      <div />
      <div>
        <SectionTitle text="Почему не&nbsp;хватает складских площадей" />
        <SectionDescription text="В&nbsp;первом квартале 2024 года по&nbsp;России совокупно введено в&nbsp;эксплуатацию 780&nbsp;тыс.&nbsp;кв.&nbsp;м&nbsp;&mdash; это самый высокий показатель за&nbsp;аналогичные периоды с&nbsp;2015&nbsp;года, рост год к&nbsp;году составил 15%. Однако большую часть новых объектов реализовали еще до&nbsp;ввода, поэтому дефицит площадей никуда не&nbsp;делся. При этом спрос со&nbsp;стороны развивающегося рынка онлайн-операторов, а&nbsp;также многоканальных ритейлеров, усиливающих онлайн-направление, остается высоким." />
      </div>
    </>
  );
};

export { WarehouseSpace };
