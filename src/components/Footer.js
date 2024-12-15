import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Help Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="social-icons">
                <a href="#">
                    <img
                        src="https://www.emailmum.com/wp-content/uploads/2019/08/kisspng-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-5aba7f669c0a94.0492483615221717506392.png"
                        alt="Facebook"
                    />
                </a>
                <a href="#">
                    <img
                        src="https://cms.afrotech.com/wp-content/uploads/2023/08/Screen-Shot-2023-08-31-at-2.22.11-PM.png"
                        alt="Twitter"
                    />
                </a>
                <a href="#">
                    <img
                        src="https://akvard.ru/images/2018/insto.png"
                        alt="Instagram"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
