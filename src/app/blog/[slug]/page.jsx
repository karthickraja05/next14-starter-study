import Image from 'next/image';
import styles from './singlePost.module.css'
import UserPost from '@/components/userPost/UserPost';
import { Suspense } from 'react';
import { getPost, randomQuotes } from '@/lib/data';
import Goback from '@/components/goback/Goback';


// const apiData = async (post_id) => {
//       const res = await fetch(`https://jsonplaceholder.org/posts/${post_id}`,{
//             // next: {
//             //       revalidate: 3600
//             // }
//             cache: "no-store",
//             // cache: "no-cache"
//       });

//       if(!res.ok){
//             throw new Error('Something went Wrong');
//       }

//       const json = await res.json();
//       return json;

// }

const SingleBlog = async ({params,searchParams}) => {
      
      const postId = params;

      const quote = await randomQuotes();

      // const postData = await apiData(postId.slug);
      const postData = await getPost(postId.slug);

      return (
            <div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image 
                        src={ postData.img ? postData.img : 'https://cdn.pixabay.com/photo/2017/01/24/20/13/postcard-2006266_1280.png' } 
                        fill className={styles.img} alt="Images"/>
                  </div>
                  <div className={styles.textContainer}>
                        <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{ postData.title }</h1>
                        <Goback/>
                        </div>
                        <div className={styles.postdetails}>
                              <Suspense fallback={<div className={styles.loading}>Loading ... </div>}>
                                    { postData.userId && <UserPost userId={postData.userId} /> }
                              </Suspense>
                              <div className={styles.detail}>
                                    <div className={styles.name}>Published</div>
                                    <div className={styles.value}>{ postData.createdAt.toString().slice(4,15) }</div>
                              </div>
                        </div>
                        <div className={styles.description}>
                        { postData.description }
                        </div>
                        <div className={styles.description}>
                        Quotes: { quote }
                        </div>
                  </div>
            </div>
      );
};

export default SingleBlog;