import { useState, useEffect } from 'react';
import { Slider } from './components/Slider';
import { SwiperMobile } from './components/SwiperMobile';
import styles from './index.module.scss';
import useWindowDimensions from '@/utils';
import cn from 'classnames';

const Block = ({
  blockTitle,
  content,
  image,
  id,
  titleClassName,
  linesBlockClassName,
  blockClassName,
}) => {
  const { width } = useWindowDimensions();
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('titleAnimationShow');
      }
    });
  }

  function onEntrySlidersWrapper(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('linesAnimationShow');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, { threshold: [1] });
    let observerSliderWrapper = new IntersectionObserver(
      onEntrySlidersWrapper,
      options
    );
    let elements = document.querySelectorAll('.titleAnimation');
    let slidersWrappers = document.querySelectorAll('.linesAnimation');
    for (let elm of elements) {
      observer.observe(elm);
    }

    for (let elm of slidersWrappers) {
      observerSliderWrapper.observe(elm);
    }

    return () => {};
  }, []);

  return (
    <section className={cn(styles.section, blockClassName)} id={id}>
      <h2
        className={cn(styles.title, titleClassName, 'titleAnimation')}
        dangerouslySetInnerHTML={{ __html: blockTitle }}
      />
      <div className={cn(styles.sectionContent, 'linesAnimationWrapper')}>
        {image}
        <div
          className={cn(
            styles.sliderWrapper,
            linesBlockClassName,
            'linesAnimation'
          )}
        >
          {width && width > 520 ? (
            <Slider content={content} />
          ) : (
            <SwiperMobile content={content} />
          )}
        </div>
      </div>
    </section>
  );
};

export { Block };
