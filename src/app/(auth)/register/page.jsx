import styles from './register.module.css';
import Link from 'next/link';
import { RegisterForm } from '@/components/register/RegisterForm';

const Register = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.formContainer}>
                        <div className={styles.title}>
                              <h1>Register</h1>

                        </div>
                        <div>
                              <RegisterForm />
                        </div>
                        
                        <div className={styles.login_link}>
                        <Link href={'/login'}>
                              Have an account ? <b>Login</b>
                        </Link>
                        </div>
                  </div>

            </div>
      );
};

export default Register;