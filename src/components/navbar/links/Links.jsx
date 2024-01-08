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

      const session = true;
      const isAdmin = true;

      return (
      <div className={styles.links}> 
            {     
                  links.map((link=>(
                        <NavLink item={link} key={link.title}/>
                  )))}


                  { session ? (
                              <>
                              {isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }} key={'admin'}/>}
                              <button>Logout</button>
                              </>
                        ) : (<NavLink item={{ title: "Login" , path: "/login" }} key={'login'}/>)}


            
      </div>);
};

export default Links;