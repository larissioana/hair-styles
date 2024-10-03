import './gallery.scss'
import img from '../../assets/7.png'
import img1 from '../../assets/4.png'
import img2 from '../../assets/5.png'
import img3 from '../../assets/6.png'
import img4 from '../../assets/8.png'
import img5 from '../../assets/9.png'
import img6 from '../../assets/10.png'
import img7 from '../../assets/11.png'
import img8 from '../../assets/white-wall-3-1920x1080(1).png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

    return (
        <div className="gallery-container">
            <LazyLoadImage effect="blur" src={img} alt="hair styles" />
            <h2 >Gallery</h2>
            <p >Explore our hair creations.</p>
            <p >Dive into our collection of stunning styles—from intricate braids to bold cuts and vibrant colors. <br /> Each look is a reflection of our passion for beauty and individuality.<br /> Get inspired by the artistry that transforms every client’s vision into reality.</p>
            <div className="images-flex-container">
                <div className="images-container-left">
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img1}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img2}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        effect="blur"
                        alt="hair styles"
                        src={img3}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }} />
                </div>
                <div className="images-container-right">
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img4}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img5}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img6}
                        width="100%"
                        height="100%"
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        alt="hair styles"
                        effect="blur"
                        src={img7}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                </div>
            </div>
        </div >
    )
}

export default Gallery
