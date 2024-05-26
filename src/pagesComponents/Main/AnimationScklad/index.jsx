import styles from "./index.module.scss";
import { Montserrat } from "next/font/google";
import cn from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../utils";

const myFont = Montserrat({ subsets: ["latin"] });
const MIN_PROCENT = 2;
const MAX_PROCENT = 100;

const AnimationScklad = () => {
  const ref = useRef();
  const [imageWidth, setImageWidth] = useState(MIN_PROCENT);
  const { width } = useWindowDimensions();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const onHadnlerMouseMove = useCallback(
    (event) => {
      if (isTouchDevice) {
        const procentX = Math.round(
          100 / (window.innerWidth / event.touches[0].clientX)
        );
        setImageWidth(() => {
          if (Number(procentX) < MIN_PROCENT) {
            return MIN_PROCENT;
          } else if (Number(procentX) > MAX_PROCENT) {
            return MAX_PROCENT;
          } else {
            return procentX;
          }
        });
      } else {
        const procentX = Math.round(100 / (window.innerWidth / event.clientX));
        setImageWidth(() => {
          if (Number(procentX) < MIN_PROCENT) {
            return MIN_PROCENT;
          } else if (Number(procentX) > MAX_PROCENT) {
            return MAX_PROCENT;
          } else {
            return procentX;
          }
        });
      }
    },
    [width, isTouchDevice]
  );

  useEffect(() => {
    if (window) {
      setIsTouchDevice("ontouchstart" in window);
      ref.current = window;
    }
  }, []);

  const onHanlderEnter = (event) => {
    if (ref.current) {
      ref.current.addEventListener(event, onHadnlerMouseMove);
    }
  };

  const onHanlderLeave = (event) => {
    if (ref.current) {
      ref.current.removeEventListener(event, onHadnlerMouseMove);
    }
  };

  return (
    <section
      className={cn(styles.wrapper, myFont.className)}
      onMouseEnter={() => !isTouchDevice && onHanlderEnter("mousemove")}
      onMouseLeave={() => !isTouchDevice && onHanlderLeave("mousemove")}
    >
      {isTouchDevice && (
        <button
          onTouchStart={() => onHanlderEnter("touchmove")}
          onTouchEnd={() => onHanlderLeave("touchmove")}
          style={{ left: `${imageWidth}%` }}
          className={styles.button}
        ></button>
      )}
      <div className={styles.firstImage} />
      <div style={{ width: `${imageWidth}%` }} className={styles.secondImage} />
      <h2 className={styles.subtitle}>Самонесущий склад</h2>
      <p className={styles.desc}>
        Быстровозводимый самонесущий склад от&nbsp;COMITAS
      </p>
    </section>
  );
};

export { AnimationScklad };
