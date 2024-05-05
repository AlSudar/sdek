import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";

const Video = () => {
  return (
    <ContentWrapper className={styles.videoWrapper}>
      {" "}
      <video
        className={styles.video}
        width="1170"
        height="658"
        controls
        preload="none"
      >
        <source src="/main/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ContentWrapper>
  );
};

export { Video };
