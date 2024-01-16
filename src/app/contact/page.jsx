"use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// const HydrationNoSSR = dynamic( () => import("@/components/Hydration") , {ssr:true} );

const ContactPage = () => {

      // const [isClient,setIsClient] = useState(false);
      
      // useEffect(()=>{
      //       setIsClient(true);
      // },[])

      // const temp = Math.random();
      // console.log(temp)
      // console.log('It worked');

      return (
            <div className={styles.container}>
                  <div className={styles.imageContainer}>
                        <Image src={'/img/contact.png'} fill className={styles.img} alt="Contact Images"/>
                  </div>
                  <div className={styles.formContainer}>
                        {/* <HydrationNoSSR /> */}
                        {/* { isClient && temp } */}
                        {/* <div suppressHydrationWarning>
                              {temp}
                        </div> */}
                        <form action="/" className={styles.form}>
                              <input type="text" placeholder="Name or Surname" />
                              <input type="email" placeholder="Email" />
                              <input type="text" placeholder="Phone Number (Optional)" />
                              <textarea name="message" id="message" cols="30" rows="10">
                              </textarea>
                              <button type="button" >Send</button>
                        </form>
                  </div>
            </div>
      );
};

export default ContactPage;