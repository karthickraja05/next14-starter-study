"use client";

import { useEffect, useState } from "react";

const ClientServiceProvider = ({children}) => {
    const a = Math.random();


    const [isClient, setIsClient] = useState(false);
    
    useEffect(()=>{
        setIsClient(true);
    },[])
    
    return (
          <div>
                { isClient && a}
                {children}
          </div>
    );
};

export default ClientServiceProvider;