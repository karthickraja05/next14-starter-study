import { handleRegister } from '@/lib/action';
import styles from './register.module.css';
const Register = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.formContainer}>
                        <div className={styles.title}>
                              <h1>Register</h1>

                        </div>
                        <form className={styles.form} action={handleRegister}>
                              <input type="text" name='username' placeholder='UserName' />
                              <input type="email" name='email' placeholder='Email' />
                              <input type="password" name='password' placeholder='Password' />
                              <input type="password" name='password_repeat' placeholder='Confirm Password' />
                              <button>Register</button>
                        </form>
                  </div>

            </div>
      );
};

export default Register;