"use client";
import { addPost } from "@/lib/action"
import styles from "./serveraction.module.css"
import { useState } from "react";

const ServerAction = () => {

    const [userId, setUserId] = useState("65aa8b25c9b22fd7e1928f37");


    // const sayHelloComponent = async () => {
    //     "use server";
    //     console.log('sayHelloComponent');
    // }

    // onChange handler to update the userId state
    const changeUserId = (event) => {
        setUserId(event.target.value);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} action={addPost}>
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="description" placeholder="description"/>
                <input type="text" name="slug" placeholder="slug"/>
                <input type="text" name="img" placeholder="img"/>
                <input type="text" name="userId" 
                placeholder="userId" 
                onChange={changeUserId}
                value={userId}
                />
                <button>Test Me</button>
            </form>
        </div>
    )
}

export default ServerAction