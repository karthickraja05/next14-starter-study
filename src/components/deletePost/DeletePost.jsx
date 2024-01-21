"use client";
import { deletePost } from '@/lib/action';
import styles from './deletepost.module.css';

const DeletePost = ({postId}) => {
  return (
    <div className={styles.container}>
        <button onClick={ () => deletePost(postId) }>Delete Post</button>
    </div>
  )
}

export default DeletePost