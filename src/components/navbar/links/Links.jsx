"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from './navLink/NavLink';
import { useState } from "react";
import Image from "next/image";

const links = [
      {
            title: "Home",
            path: '/'
      },
      {
            title: "About",
            path: '/about'
      },
      {
            title: "Blog",
            path: '/blog'
      },
      {
            title: "Contact",
            path: '/contact'
      },
      {
            title: "Navigation Test",
            path: '/navigation-test'
      },
];


const Links = () => {
      const [open,setOpen] = useState(false);
      const session = false;
      const isAdmin = true;

      return (
            <div className={styles.container}>
                  <div className={styles.links}> 
                        {     
                              links.map((link=>(
                                    <NavLink item={link} key={link.title}/>
                              )))
                        }


                        { session ? (
                                    <>
                                    {isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }} key={'admin'}/>}
                                    <button className={styles.logout}>Logout</button>
                                    </>
                              ) : (<NavLink item={{ title: "Login" , path: "/login" }} key={'login'}/>)
                        }
                  </div>
                  {/* <button className={styles.mobileBtn} onClick={ () => setOpen((prev) => !prev) }>Menu</button> */}
                  <Image src="/img/menu.png"  onClick={ () => setOpen((prev) => !prev) } className={styles.mobileBtn} width={30} height={30} alt="Menu Image" />
                  {     
                        open && <div className={styles.mobileMenu}>
                              {
                                    links.map((link=>(
                                          <NavLink item={link} key={link.title}/>
                                    )))
                              }
                              </div>
                  }
            </div>
      );
};

export default Links;