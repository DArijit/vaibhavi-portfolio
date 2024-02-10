import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingPageContainer}>
        <div className={styles.landingPageHeaderIcons}>Logo</div>
        <div className={styles.landingPageHeaderIcons}>Menu</div>
      </div>

      <div className={styles.nameContainer}>
          <img
            src="https://images.unsplash.com/photo-1514944152559-a103040c7f16?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Moon"
            className={styles.images}
          />
        <div className={styles.react}>REACT DEVELOPER</div>
        <div className={styles.name}>VAIBHAVI</div>
        <div className={styles.name}>KOLHE</div>
      </div>

      <div className={styles.navBarContainer}>
        <div>vaibavikolhe0606@gmail.com</div>
        <div className={styles.navBar}>Home | About | Experience | Contact</div>
        <div className={styles.links}>Links</div>
      </div>
    </>
  );
};

export default LandingPage;
