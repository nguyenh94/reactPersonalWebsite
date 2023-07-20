import '@styles/globals.css'
import { useEffect } from 'react';
import Header from '@components/Header';
import header_styles from '../styles/Header.module.css'
import nav_styles from '../styles/Nav.module.css'

function Application({ Component, pageProps }) {
  useEffect(() => {
    const statement = document.querySelector(`.${header_styles.statement}`);
    const name_header = document.querySelector(`.${header_styles.name}`);
    const resume_button = document.querySelector(`.${header_styles.resume_button}`);
    const nav_items = document.querySelectorAll(`.${nav_styles.nav_item}`);
    console.log(nav_items[0]);

    statement.onanimationend = () => {
      console.log("Animation ended");
      statement.style.borderRight = "white";
      name_header.style.borderRight = '2px solid black';
    };

    name_header.onanimationend = () => {
      console.log("ended");
      resume_button.style.visibility = 'visible';
      nav_items[0].style.visibility = 'visible';
      nav_items[1].style.visibility = 'visible';
    }

  }, []);
  return <Component {...pageProps} />
}

export default Application
