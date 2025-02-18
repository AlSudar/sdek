import styles from './index.module.scss';

const BackgroundComponent = ({ backgroundImage, title }) => (
  <div
    className={styles.background_component}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <h2 className={styles.background_component_title}>{title}</h2>
  </div>
);

export { BackgroundComponent };
