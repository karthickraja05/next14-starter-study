import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <div className={styles.head}>Creative Thoughts Agency</div>

        <div className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>

        <div className={styles.buttonsContainer}>
          <button className={`${styles.btn} ${styles.btn1}`}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src={'/img/brands.png'} alt="Brand Image" fill className={styles.brand} />
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src={'/img/hero.png'} alt="Home Page Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default Home;