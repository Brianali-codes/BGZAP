import React from 'react';

const BuyMeACoffeeButton = () => {
    return (
        <a 
            href="https://ko-fi.com/brianalcodes" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img
                src="https://storage.ko-fi.com/cdn/kofi2.png?v=6" 
                alt="Buy Me A Coffee" 
                style={{ width: '200px', height: 'auto',borderRadius:'10px', }} 
            />
        </a>
    );
};

export default BuyMeACoffeeButton;
