import React from 'react';
import '../styles/notifications-styles.css';

function NotificationsPage() {
    return (
        <div className="notifications-container">
            <h1>通知</h1>
            <div className="notification">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/010/366/202/original/bell-icon-transparent-notification-free-png.png"
                    alt="New Product"
                    className="notification-icon"
                />
                <div className="notification-text">
                    <p>您关注的商品已经到货！赶快查看！</p>
                    <span className="notification-time">2024-10-22 09:30</span>
                </div>
            </div>
            <div className="notification">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/010/366/202/original/bell-icon-transparent-notification-free-png.png"
                    alt="Discount"
                    className="notification-icon"
                />
                <div className="notification-text">
                    <p>限时折扣！您感兴趣的商品正在打折，快来选购！</p>
                    <span className="notification-time">2024-10-21 14:45</span>
                </div>
            </div>
            <div className="navigation-buttons">
                <a href="/" className="nav-btn">
                    Return to Homepage
                </a>
                <a href="/login" className="nav-btn">
                    My Account
                </a>
            </div>
        </div>
    );
}

export default NotificationsPage;