import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

const Slider = ({ content }) => {
  const [activeSlider, setActiveSlider] = useState(0);

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('swiperItemVisibleShow');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.swiperItemAnimation');
    for (let elm of elements) {
      observer.observe(elm);
    }

    return () => {};
  }, []);

  const prevState = () => {
    if (activeSlider - 1 < 0) {
      setActiveSlider(() => content.length - 1);
    } else {
      setActiveSlider(() => activeSlider - 1);
    }
  };

  const nextState = () => {
    if (activeSlider + 1 === content.length) {
      setActiveSlider(() => 0);
    } else {
      setActiveSlider(() => activeSlider + 1);
    }
  };

  return (
    <div className={`${styles.content} swiperItemAnimation`}>
      {content.map((slidersItem, slidersId) => {
        return slidersItem.map((item, id) => {
          return (
            <div
              className={`swiperItem swiperItemVisible_${++id} ${
                slidersId === activeSlider ? 'sliderActive' : ''
              }`}
              key={id}
            >
              <p
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          );
        });
      })}
      <div className={styles.paginationWrapper}>
        <button
          onClick={() => {
            if (activeSlider !== 0) {
              prevState();
            }
          }}
          className={cn(
            styles.button,
            styles.buttonPrev,
            activeSlider === 0 && styles.buttonDisable
          )}
          area-label='Предыдущий слайд'
        />
        <ul className={styles.pagination}>
          {content.map((_, id) => (
            <li
              key={id}
              className={`${styles.paginationItem} ${
                activeSlider === id ? styles.paginationItemActive : ''
              }`}
              onClick={() => setActiveSlider(--id)}
            >
              {++id}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            if (activeSlider !== content.length - 1) {
              nextState();
            }
          }}
          className={cn(
            styles.button,
            styles.buttonNext,
            activeSlider === content.length - 1 && styles.buttonDisable
          )}
          area-label='Следующий слайд слайд'
        />
      </div>
    </div>
  );
};

export { Slider };
