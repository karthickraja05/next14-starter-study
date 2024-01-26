import { handleGithubLogin, handleLogin } from "@/lib/action";
import styles from './login.module.css';
import Link from "next/link";


const Login = async () => {


      return (
            <div className={styles.container}>
                  <div className={styles.github}>
                        <form action={handleGithubLogin}>
                              <button>Login with GitHub</button>
                        </form>
                  </div>
                  <div className={styles.login_creden}>
                        <form action={handleLogin}>
                              <input type="text" name="username" placeholder="UserName" />
                              <input type="password" name="password" placeholder="Password" />
                              <button>Login with Credentials</button>
                        </form>
                  </div>
                  <div className={styles.login_link}>
                        <Link href={'/register'}>
                              Create an account ? <b>Register</b>
                        </Link>
                  </div>
            </div>
      );
};

export default Login;