import Image from 'next/image';
import styles from './userPost.module.css'
import { getUser } from '@/lib/data';

// const apiData = async (user_id) => {
//     const res = await fetch(`https://jsonplaceholder.org/users/${user_id}`,{
//           cache: "no-store",
//     });

//     if(!res.ok){
//           throw new Error('Something went Wrong');
//     }

//     const json = await res.json();
//     return json;

// }

const UserPost = async ({ userId }) => {
    // const apiPostData = await apiData(userId);
    const apiPostData = await getUser(userId);

    return (
        <div className={styles.container}>
            <div className={styles.avartar}>
                { apiPostData.img && <Image src={'https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg'} alt='Avatar' width={70} height={70} className={styles.avartar1} /> }
            </div>
            <div className={styles.detail}>
                <div className={styles.name}>Author</div>
                <div className={styles.value}>{apiPostData.username}</div>
            </div>
        </div>
    );
};

export default UserPost;