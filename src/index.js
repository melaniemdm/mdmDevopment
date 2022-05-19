import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ScrollToTop from "react-scroll-to-top";
import Fade from 'react-reveal/Fade';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Why from '../src/components/Why';
import Prestations from '../src/components/Prestations';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Header/>
<Banner/>
<Fade left>
<Why/>
<Prestations/>
<Contact/>

<Footer/>
<ScrollToTop color="rgba(74, 71, 95)"/>
</Fade>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
