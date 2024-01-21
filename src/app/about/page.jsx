import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
      title: 'About',
      description: 'Next.js study app, you can find all my files in github',
}

const AboutPage = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.textContainer}>
                        <div className={styles.title}>About Agency</div>
                        <div className={styles.title2}>We create digital ideas that are bigger, bolder, braver and better.</div>
                        <div className={styles.description}>we believe in the transformative power of digital marketing to elevate brands and drive business success. Established with a passion for innovation and a commitment to delivering results, we have emerged as a leading force in the dynamic landscape of digital marketing.</div>
                        <div className={styles.data}>
                              <div className={styles.statistics}>
                                    <div className={styles.count}>10 K+</div>
                                    <div className={styles.count_text}>Year of experience</div>
                              </div>
                              <div className={styles.statistics}>
                                    <div className={styles.count}>234 K+</div>
                                    <div className={styles.count_text}>People reached</div>
                              </div>
                              <div className={styles.statistics}>
                                    <div className={styles.count}>5 K+</div>
                                    <div className={styles.count_text}>Services and plugins</div>
                              </div>
                        </div>
                  </div>
                  <div className={styles.imgContainer}>
                        <Image src={'/img/about.png'} alt="About us Images" fill className={styles.img}
                        />
                  </div>
            </div>
      );
};

export default AboutPage;