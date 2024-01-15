import Link from 'next/link';
import styles from './postcard.module.css';
import Image from 'next/image';

const PostCard = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.top}>
                        <div className={styles.imgContainer}>
                              <Image src="https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg" alt='Post Card Image' className={styles.img} fill />
                        </div>
                        <span className={styles.date}>Jan 15, 2024</span>
                  </div>
                  <div className={styles.bottom}>
                        <h1 className={styles.title}>Title</h1>
                        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <Link className={styles.link} href="/blog/12">Read More</Link>
                  </div>
            </div>
      );
};

export default PostCard;