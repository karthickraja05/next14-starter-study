import { handleGithubLogin } from "@/lib/action";
import styles from './login.module.css';


const Login = async () => {


      return (
            <div className={styles.container}>
                  <div className={styles.github}>
                        <form action={handleGithubLogin}>
                              <button>Login with GitHub</button>
                        </form>
                  </div>
                  <div className={styles.login_creden}>
                        <form action={handleGithubLogin}>
                              <input type="text" name="username" placeholder="UserName"/>
                              <input type="password" name="password" placeholder="Password"/>
                              <button>Login with Credentials</button>
                        </form>
                  </div>
            </div>
      );
};

export default Login;