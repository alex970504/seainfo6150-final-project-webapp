import React from 'react'
import styles from './About.module.css';
import NavigationBar from "../Widgets/NavigationBar";

const navbarPosition = ["about"];

const About = () => {
    return (
        <div className={styles.about}>
          <NavigationBar positions={navbarPosition}/>
          <section>
            <h1>About the website</h1>
            <h1>About us</h1>
            <a href="/contact" className="clickable">Contact us</a>
          </section>
        </div>
    )
};

export default About;
