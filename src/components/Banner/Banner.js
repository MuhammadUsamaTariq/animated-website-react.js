import Hero from './images/Hero.svg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container-fluid mt-5">
            <div id="wrapper" className="container mt-5">
                <div className="row" >
                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <img id="hero-image" src={Hero} alt="animated hero image" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6" >
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="5000">
                                    <p className="animate__animated animate__backInUp mt-5">Scaleable etxended<br /> business office<br /> services</p>
                                    <br />

                                    <h4 id="staff-augmentation" className="animate__animated animate__fadeIn active">Staff Augmentation</h4>
                                    <div className="underbar"></div>

                                </div>
                                <div className="carousel-item" data-bs-interval="5000">
                                    <p className="animate__animated animate__backInUp mt-5">Innovation and<br /> Intelligence soltions<br /> and services</p>
                                    <br />

                                    <h4 id="product-management" className="animate__animated animate__fadeIn active">Product Management</h4>
                                    <div className="underbar"></div>

                                </div>
                                <div className="carousel-item" data-bs-interval="5000">
                                    <p className="animate__animated animate__backInUp mt-5">Customized Solutions<br /> for the need of<br /> changed market</p>
                                    <br />

                                    <h4 id="revenue-management" className="animate__animated animate__fadeIn active">Revenue Cycle Management</h4>
                                    <div className="underbar"></div>

                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Banner;
