import React from 'react';
import '../styles/stylesLogin.css';

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-left">
                <a href="https://www.taobao.com">
                    <img
                        src="https://alibabamadeeasy.com.au/wp-content/uploads/2020/09/taobao-logo-bi_stacked.png"
                        alt="Taobao Logo"
                        className="logo"
                    />
                </a>
            </div>
            <div className="login-right">
                <h1>Login to Taobao</h1>
                <form action="https://login.taobao.com/" method="post">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="captcha">Captcha</label>
                        <input type="text" id="captcha" name="captcha" placeholder="Enter the captcha" required />
                        <img
                            src="https://avatars.mds.yandex.net/i?id=409879fa3d1e0fead8484050095cc8ead11b7c20-10869728-images-thumbs&n=13"
                            alt="Captcha"
                            className="captcha-img"
                        />
                    </div>
                    <div className="submit-group">
                        <button type="submit">Login</button>
                    </div>
                    <div className="options">
                        <a href="#">Forgot Password?</a>
                        <a href="#">Sign Up for Taobao</a>
                    </div>
                </form>
                <div className="return-home">
                    <a href="/" className="home-btn">
                        Return to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
