"use client";
import { useRouter } from 'next/navigation';
import styles from './goback.module.css';

const Goback = () => {
    const router = useRouter();
    const handleClick = function(){
        router.back();
    }

    return (
        <button className={styles.goback_button} onClick={() => { handleClick() }} >Go Back</button>
    )
}

export default Goback