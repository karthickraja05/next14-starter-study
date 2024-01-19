import Image from 'next/image';
import styles from './userPost.module.css'

const apiData = async (user_id) => {
    const res = await fetch(`https://jsonplaceholder.org/users/${user_id}`,{
          cache: "no-store",
    });

    if(!res.ok){
          throw new Error('Something went Wrong');
    }

    const json = await res.json();
    return json;

}

const UserPost = async ({ userId }) => {
    const apiPostData = await apiData(userId);

    return (
        <div className={styles.container}>
            <div className={styles.avartar}>
                <Image src={'https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg'} alt='Avatar' width={70} height={70} className={styles.avartar1} />
            </div>
            <div className={styles.detail}>
                <div className={styles.name}>Author</div>
                <div className={styles.value}>{apiPostData.firstname}</div>
            </div>
        </div>
    );
};

export default UserPost;