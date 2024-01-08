import Link from "next/link";
import styles from "./links.module.css";
import NavLink from './navLink/NavLink';

const Links = () => {
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
      ];

      return (
      <div className={styles.links}> 
            {     
                  links.map((link=>(
                        <NavLink item={link} key={link.title}/>
                  )))
            }
      </div>);
};

export default Links;