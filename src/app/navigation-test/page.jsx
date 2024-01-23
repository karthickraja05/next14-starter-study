"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {

    const router = useRouter();

    const pathName = usePathname();
    const searchParams = useSearchParams();
    // Get all parameter names
  const paramNames = Array.from(searchParams.keys());
    console.log(paramNames);

    // Get all values for each parameter
  const allParams = paramNames.reduce((params, paramName) => {
    params[paramName] = searchParams.getAll(paramName);
    return params;
  }, {});

    // for(let i = 0; i < paramNames.length; i++){
    //     console.log(searchParams.get(paramNames[i]))
    // }

    // console.log(allParams);
    // console.log(pathName);


    const handleClick = function(type){
        switch (type) {
            case 'back':
                router.back();
                break;
            case 'forward':
                router.forward();
                break;
            case 'refresh':
                router.refresh();
                break;
            case 'replace':
                router.replace('/');
                break;
            case 'push':
                router.push('/');
                break;
            default:
                break;
        }
    };


    const divStyle = {
        marginTop: "20px",
    }

    const btnStyle = {
        marginTop: "20px",
        padding: "10px",
        display: "block",
    }

    

    return (
        <div>
            <h3>Navigation Test Page</h3>
            <div style={divStyle}>
                <Link href={'/'} prefetch={true}>Go to Home Page</Link>
                <button onClick={() => handleClick('refresh') } style={btnStyle}>Click To Refresh</button>
                <button onClick={() => handleClick('back') } style={btnStyle}>Click To Back</button>
                <button onClick={() => handleClick('forward') } style={btnStyle}>Click To Forward</button>
                <button onClick={() => handleClick('replace') } style={btnStyle}>Click To Replace</button>
                <button onClick={() => handleClick('push') } style={btnStyle}>Click To Push</button>
            </div>
        </div>
    );
};

export default NavigationTest;