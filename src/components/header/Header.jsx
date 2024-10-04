import './header.scss';
import hair2 from '../../assets/1.webp';
import hair3 from '../../assets/2.webp'
import FixedContainer from '../fixedContainer/FixedContainer';
import SubscribeButton from '../subscribeButton/SubscribeButton';
import { useState } from 'react';
import { Blurhash } from 'react-blurhash';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    return (
        <>
            <FixedContainer />
            <div className="header-container">
                <div className="left">
                    {
                        !isLoaded &&
                        <Blurhash
                            hash="L5C=6%_3*0T0~BR*1MMxyDxE0}M|"
                            width="100%"
                            height="100%"
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    }
                    <img src={hair2} width="100%" onLoad={handleImageLoad} style={{
                        display: isLoaded ? 'block' : 'none',
                    }}
                        height="100%" alt=" hair styles" />
                </div>
                <div className="description">
                    <h1>Unleash your unique style.</h1>
                    <p>Experience the art of hair that not only enhances your appearance but also boosts your confidence.</p>
                    <SubscribeButton />
                </div>
                <div className="right">
                    {
                        !isLoaded &&
                        <Blurhash
                            hash="L4D8d|}A19EM0$ENELxE10WA}@xG"
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                            width="100%"
                            height="100%"
                        />
                    }
                    <img height="100%" width="100%" onLoad={handleImageLoad} style={{ display: isLoaded ? 'block' : 'none', }} alt="hair styles" src={hair3} />
                </div>
            </div>
        </>
    )
}

export default Header
