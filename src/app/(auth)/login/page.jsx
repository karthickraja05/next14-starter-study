import { handleGithubLogin } from "@/lib/action";

const Login = async () => {


      return <div>
            <form action={handleGithubLogin}>
                  <button>Login with GitHub</button>
            </form>
      </div>;
};

export default Login;