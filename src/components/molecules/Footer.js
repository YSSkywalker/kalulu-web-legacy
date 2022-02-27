import React from 'react';
// import { Link } from 'react-router-dom'
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright &copy; 2022 <a href="https://twitter.com/kalulu_nya" className='footer-link' target="_blank" rel="noreferrer">Kalulu Yukimaru</a><br/>All Right Reserved.</p>
            </footer>
        );
    }
}

export default Footer;
