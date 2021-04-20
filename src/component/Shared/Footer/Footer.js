import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const company = [
        {name: "About Us" , link: "/aboutUs"},
        {name: "How It Works" , link: "/howWorks"},
        {name: "FAQ" , link: "/faq"},
        {name: "Picing" , link: "/pricing"},
    ]
    const ourAddress = [
        {name: "Bangladesh" , link: "//google.com/map"},
        {name: "Mohakhali" , link: "//google.com/map"},
       
    ]
    const Partnerships = [
        {name: "TCL" , link: "/tcl"},
        {name: "Ali Baba" , link: "/aliBaba"},
        {name: "Amazon" , link: "/amazon"},
        {name: "Jamuna" , link: "/jamuna"},
        
    ]
    const legals = [
        {name: "Privacy" , link: "/privacy"},
        {name: "Terms" , link: "/terms"},
        {name: "Gurantee" , link: "/guarantee"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-4">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Company"} menuItems={company}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={legals}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={Partnerships}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button style={{backgroundColor: '#41C941'}} className="btn">+08805755445</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;