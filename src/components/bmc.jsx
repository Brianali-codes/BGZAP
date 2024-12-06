import React from 'react';

const BuyMeACoffeeButton = () => {
    return (
        <a 
            href="https://buymeacoffee.com/bryce_codes" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img
                src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" 
                alt="Buy Me A Coffee" 
                style={{ width: '200px', height: 'auto',borderRadius:'10px', }} 
            />
        </a>
    );
};

export default BuyMeACoffeeButton;
