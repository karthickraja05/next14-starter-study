import Image from 'next/image';
import styles from './singlePost.module.css'
import UserPost from '@/components/userPost/UserPost';
import { Suspense } from 'react';


const apiData = async (post_id) => {
      const res = await fetch(`https://jsonplaceholder.org/posts/${post_id}`,{
            // next: {
            //       revalidate: 3600
            // }
            cache: "no-store",
            // cache: "no-cache"
      });

      if(!res.ok){
            throw new Error('Something went Wrong');
      }

      const json = await res.json();
      return json;

}

const SingleBlog = async ({params,searchParams}) => {
      
      const postId = params;

      const postData = await apiData(postId.slug);

      return (
            <div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image src={postData.thumbnail} fill className={styles.img} alt="Images"/>
                  </div>
                  <div className={styles.textContainer}>
                        <h1 className={styles.title}>{ postData.title }</h1>
                        <div className={styles.postdetails}>
                              <Suspense fallback={<div className={styles.loading}>Loading ... </div>}>
                                    <UserPost userId={postData.userId} />
                              </Suspense>
                              <div className={styles.detail}>
                                    <div className={styles.name}>Published</div>
                                    <div className={styles.value}>{ postData.publishedAt }</div>
                              </div>
                        </div>
                        <div className={styles.description}>
                        { postData.content }
                        </div>
                  </div>
            </div>
      );
};

export default SingleBlog;