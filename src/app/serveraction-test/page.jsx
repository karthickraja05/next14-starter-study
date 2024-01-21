import { addPost } from "@/lib/action"
import styles from "./serveraction.module.css"

const ServerAction = () => {

    // const sayHelloComponent = async () => {
    //     "use server";
    //     console.log('sayHelloComponent');
    // }

    return (
        <div className={styles.container}>
            <form className={styles.form} action={addPost}>
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="description" placeholder="description"/>
                <input type="text" name="slug" placeholder="slug"/>
                <input type="text" name="img" placeholder="img"/>
                <input type="text" name="userId" placeholder="userId" value="65aa8b25c9b22fd7e1928f37"/>
                <button>Test Me</button>
            </form>
        </div>
    )
}

export default ServerAction