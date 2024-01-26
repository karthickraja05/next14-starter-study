"use client";
import styles from "./register_form.module.css"
import { handleRegister } from '@/lib/action';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export const RegisterForm = () => {

  const [state, formAction] = useFormState(handleRegister, undefined);
  const router = useRouter();

  useEffect(()=>{
    state?.success && router.push('/login');
  },[state?.success,router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name='username' placeholder='UserName' />
      <input type="email" name='email' placeholder='Email' />
      <input type="password" name='password' placeholder='Password' />
      <input type="password" name='password_repeat' placeholder='Confirm Password' />
      <button>Register</button>

      <p>{ state?.error && state?.error}</p>

    </form>
  )
}
