import Image from "next/image";
import styles from "./contact.module.css";


const ContactPage = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.imageContainer}>
                        <Image src={'/img/contact.png'} fill className={styles.img} />
                  </div>
                  <div className={styles.formContainer}>
                        <form action="/" className={styles.form}>
                              <input type="text" placeholder="Name or Surname" />
                              <input type="email" placeholder="Email" />
                              <input type="text" placeholder="Phone Number (Optional)" />
                              <textarea name="message" id="message" cols="30" rows="10">

                              </textarea>
                              <button>Send</button>
                        </form>
                  </div>
            </div>
      );
};

export default ContactPage;