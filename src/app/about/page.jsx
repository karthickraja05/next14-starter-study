import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
      return (<div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image src={'/img/about.png'} alt="About us Images" fill />
                        {/* <Image src={'https://images.pexels.com/photos/19594011/pexels-photo-19594011/free-photo-of-woman-crouching-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="About us Images" fill /> */}
                  </div>
            </div>);
};

export default AboutPage;