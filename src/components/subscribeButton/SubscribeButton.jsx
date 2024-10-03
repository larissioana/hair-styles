import { useState } from "react";
import './subscribeButton.scss';

const SubscribeButton = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSubscribe = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setSubscribed(true);
        }, 2000);
    };


    return (
        <button
            className={`subscribe-btn ${isAnimating ? 'gradient' : ''} ${subscribed ? 'subscribed' : ''}`}
            onClick={handleSubscribe}
            disabled={isAnimating || subscribed}
        >
            {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
    );
};

export default SubscribeButton;