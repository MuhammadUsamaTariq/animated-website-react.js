import AboutUsImage from './images/AboutSVG.svg'
import CarrerImage from './images/Careersvg.svg'
import './AboutUs.css'
import { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const frames = [
        { transform: 'rotate(200deg)', offset: 0.2, },
        { borderRadius: '0', offset: 0.4, easing: "ease-out", },
        { transform: 'translateX(60px)', offset: 0.5, easing: "ease-out", },
        { transform: 'rotate(180deg)', offset: 1 }
    ];

    const timing = { duration: 12000, iterations: Infinity, playbackRate: 1, direction: "alternate-reverse" };


    const movement = useWebAnimations({ keyframes: frames, animationOptions: timing });


    return (
        <div id="target-aboutus" className="container-fluid">
            <div className="container mt-5">
                <div className="row" >

                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <p id="we-are" className="mb-5" >We are</p>

                        <p id="we-are-desc" className="text-justify">
                            A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery
                        </p>
                        <br />

                        <h4 id="about-us">About Us</h4>
                        <div className="underbar mb-5"></div>
                        {/* <div id="about-us">About Us</div> */}
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <img id="aboutus-image" src={AboutUsImage} alt="animated aboutus image" />
                    </div>

                </div>


            </div>
            <div data-aos="fade-in"
                data-aos-offset="250"
                data-aos-delay="40"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-iterations="infinity"
                id="about-us-div"
                className="container-fluid">
                <div id="about-us-div-container" className="container " >
                    <div className="row " >
                        <div id="about-us-div-head" className='col-sm-12 col-md-12 '>
                            <h1 className="animate__animated animate__fadeInUp">
                                Economical,<br />
                                dynamic and managed business solutions
                            </h1>
                        </div>
                    </div>
                    <div className="row" id="about-us-div-container-child" >
                        <div id="about-us-div-container-child-child1" className='col-sm-10 col-md-4'>
                            <h3 className="animate__animated animate__fadeInUp">Improved Efficiency</h3>
                            <br /><br />
                            <p className="animate__animated animate__fadeInUp " >By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core...</p>
                        </div>
                        <div id="about-us-div-container-child-child1" className='col-sm-10 col-md-4'>
                            <h3 className="animate__animated animate__fadeInUp">Reduced Cost</h3>
                            <br /><br />
                            <p className="animate__animated animate__fadeInUp ">Our solutions are crafted to bring effective change in your business by ensuring cost-effective and reliable operation methodologies...</p>
                        </div>
                        <div id="about-us-div-container-child-child1" className='col-sm-10 col-md-4'>
                            <h3 className="animate__animated animate__fadeInUp">Overarching Impact</h3>
                            <br /><br />
                            <p className="animate__animated animate__fadeInUp ">By ensuring quality process management we can ensure a comprehensive impact on your business....</p>
                        </div>
                    </div>

                </div>
            </div>
            <div id="carrer-target" className="container mt-5">
                <div className="row" >

                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <img id="carrer-image" src={CarrerImage} alt="animated carrer image" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <div className="square" ref={movement.ref}></div>
                        <p id="carrer-head" className="mb-5" >Talk to our experts
                            about your requirements</p>

                        <p id="carrer-desc">
                            Contact us and know more about how our experts can help your business grow.
                        </p>

                        <br />

                        <h4 id="equire-now">Equire Now</h4>
                        <div className="underbar mb-5"></div>
                    </div>



                </div>


            </div>


        </div>

    );
}

export default AboutUs;