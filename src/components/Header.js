import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img
                    src="https://img.alicdn.com/tfs/TB1giluwEY1gK0jSZFMXXaWcVXa-1280-1280.png_.webp"
                    alt="Taobao Logo"
                />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for products, brands, and more" />
            </div>
            <div className="user-options">
                <a href="/login">
                    <button className="account-btn">My Account</button>
                </a>
                <button className="cart-btn">Cart</button>
                <a href="/notifications">
                    <button className="notification-btn">Notifications</button>
                </a>
            </div>
        </header>
    );
}

export default Header;
