import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const Login = async () => {

      const session = await auth();

      console.log(session);

      

      return <div>
            <form action={'/api/auth/signin'}>
                  <button>Login with GitHub</button>
            </form>
      </div>;
};

export default Login;