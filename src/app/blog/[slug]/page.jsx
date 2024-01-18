import Image from 'next/image';
import styles from './singlePost.module.css'

const SingleBlog = ({params,searchParams}) => {
      console.log(params);
      console.log(searchParams);
      return (
            <div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image src="https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg" fill className={styles.img} alt="Images"/>
                  </div>
                  <div className={styles.textContainer}>
                        <h1 className={styles.title}>Title</h1>
                        <div className={styles.postdetails}>
                              <div className={styles.avartar}>
                              <Image src={'https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg'} alt='Avatar' width={70} height={70} className={styles.avartar1} />
                              </div>
                              <div className={styles.detail}>
                                    <div className={styles.name}>Author</div>
                                    <div className={styles.value}>Karthickraj</div>
                              </div>
                              <div className={styles.detail}>
                                    <div className={styles.name}>Published</div>
                                    <div className={styles.value}>Nov 1, 2024</div>
                              </div>
                        </div>
                        <div className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </div>
                  </div>
            </div>
      );
};

export default SingleBlog;