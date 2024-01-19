import Link from 'next/link';
import styles from './postcard.module.css';
import Image from 'next/image';

const PostCard = ({localItem}) => {
      return (
            <div className={styles.container}>
                  <div className={styles.top}>
                        <div className={styles.imgContainer}>
                              { localItem.img && <Image src={localItem.img} alt='Post Card Image' className={styles.img} fill /> }
                        </div>
                        <span className={styles.date}>{ localItem.createdAt.toString().slice(4,15) }</span>
                  </div>
                  <div className={styles.bottom}>
                        <h1 className={styles.title}>{localItem.title}</h1>
                        <p className={styles.desc}>{localItem.description}</p>
                        <Link className={styles.link} href={`/blog/${localItem.slug}`}>Read More</Link>
                  </div>
            </div>
      );
};

export default PostCard;