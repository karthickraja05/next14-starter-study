"use client";

import { handleLogin } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {

    const [state, formAction] = useFormState(handleLogin, undefined);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/');
    }, [state?.success, router]);

    const test = () => {

    }

    return (
        <form action={formAction}>
            <input type="text" name="username" placeholder="UserName" onChange={test} value="pravin1" />
            <input type="password" name="password" placeholder="Password" value="12345678"/>
            <button>Login with Credentials</button>
            <p>{ state?.error && state.error }</p>
        </form>
    )
}

export default LoginForm