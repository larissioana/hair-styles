import './header.scss';
import hair2 from '../../assets/1.png';
import hair3 from '../../assets/2.png'
import FixedContainer from '../fixedContainer/FixedContainer';

const Header = () => {
    return (
        <>
            <FixedContainer />
            <div className="header-container">
                <div className="left">
                    <img src={hair2} alt="hair styles" />
                </div>
                <div className="description">
                    <h1>Unleash your unique style.</h1>
                    <p>Experience the art of hair that not only enhances your appearance but also boosts your confidence.</p>
                    <button className="button">Transform Your Look</button>
                </div>
                <div className="right">
                    <img alt="hair styles" src={hair3} />
                </div>
            </div>
        </>
    )
}

export default Header
