import styles from "./index.module.scss";
import cn from "classnames";
import useWindowDimensions from "../../utils/index";
import { currentDiagrams } from "./currentDiagrams";

const MinimumApplicants = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <h2 className={cn(styles.subtitle, "animation-transformY")}>
        Минимум соискателей за&nbsp;30&nbsp;лет
      </h2>
      {width && currentDiagrams(width)}
      <p className={cn(styles.bottomDesc, "animation-opacity")}>
        Источники: Институт экономики РАН, SuperJob, &laquo;Интерфакс&raquo;,
        МВФ
      </p>
    </>
  );
};

export { MinimumApplicants };
