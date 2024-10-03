import './header.scss';
import hair2 from '../../assets/1.png';
import hair3 from '../../assets/2.png'
import FixedContainer from '../fixedContainer/FixedContainer';
import SubscribeButton from '../subscribeButton/SubscribeButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {
    return (
        <>
            <FixedContainer />
            <div className="header-container">
                <div className="left">
                    <LazyLoadImage effect="blur" src={hair2} width="100%" height="100%" alt=" hair styles" />
                </div>
                <div className="description">
                    <h1>Unleash your unique style.</h1>
                    <p>Experience the art of hair that not only enhances your appearance but also boosts your confidence.</p>
                    <SubscribeButton />
                </div>
                <div className="right">
                    <LazyLoadImage effect="blur" height="100%" width="100%" alt="hair styles" src={hair3} />
                </div>
            </div>
        </>
    )
}

export default Header
