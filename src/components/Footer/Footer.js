
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" id="f_logo2" viewBox="0 0 88.892 55.768">
                            <g id="Group_88" data-name="Group 88" transform="translate(-90.29 -40.162)">
                                <g data-name="Group 2" transform="translate(90.29 40.162)">
                                    <path data-name="Path 1" d="M211.8,123.4l-18.449-18.449,4.636-4.639L193.5,95.8l-9.149,9.152L211.8,132.405l14.256-14.281-4.488-4.49L211.8,123.4" transform="translate(-169.897 -76.637)" fill="#fdb811" fillRule="evenodd"></path>
                                    <path data-name="Path 2" d="M243.611,77.053l-18.3-18.3L211.051,73.031l4.513,4.49,9.743-9.768,9.794,9.768,4.02,4.02,4.639,4.661-4.639,4.639,4.49,4.513,9.152-9.152-9.152-9.149" transform="translate(-183.425 -57.864)" fill="#fdb811" fillRule="evenodd"></path>
                                    <path data-name="Path 3" d="M262.6,73l-7.229,7.226,4.022,4.022,3.207-3.181L274.932,93.4,262.6,105.733l-3.207-3.184-4.49-4.513L250.266,93.4l4.636-4.639-4.02-4.045L242.2,93.4l8.683,8.681,4.488,4.49L262.6,113.8,283,93.4,262.6,73" transform="translate(-199.207 -65.084)" fill="#fff" fillRule="evenodd"></path>
                                    <path data-name="Path 4" d="M182.677,80.226,175.449,73l-20.4,20.4,20.4,20.4,7.229-7.226-4.045-4.022-3.184,3.184L163.115,93.4l12.333-12.333,3.184,3.181,4.513,4.513,4.636,4.639-4.636,4.636,4.02,4.045,8.684-8.681-8.684-8.684-4.488-4.49" transform="translate(-155.051 -65.084)" fill="#fff" fillRule="evenodd"></path>
                                    <g data-name="Group 1" transform="translate(81.022)">
                                        <path data-name="Path 5" d="M328.844,59.429a3.935,3.935,0,1,1-3.923-3.934A3.9,3.9,0,0,1,328.844,59.429Zm-6.89,0a3.01,3.01,0,0,0,2.989,3.142,2.977,2.977,0,0,0,2.92-3.118,2.961,2.961,0,1,0-5.909-.023Zm2.359,2.063h-.887V57.558a7.509,7.509,0,0,1,1.471-.12,2.338,2.338,0,0,1,1.331.288,1.1,1.1,0,0,1,.373.863,1,1,0,0,1-.794.911v.048a1.157,1.157,0,0,1,.7.96,3.067,3.067,0,0,0,.28.983h-.957a3.45,3.45,0,0,1-.3-.959c-.07-.432-.3-.624-.793-.624h-.421Zm.024-2.23h.421c.49,0,.887-.168.887-.576,0-.36-.256-.6-.818-.6a2.065,2.065,0,0,0-.49.048Z" transform="translate(-320.974 -55.495)" fill="#fff"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>


                    </div>
                    <div className="col-12 text-center mt-4">
                        <div><h1 id="care-to-join" className="text-white footer-head">Care To Join Us?</h1></div>
                    </div>
                    <div className="col-12 text-center mt-4">
                        <div><p id="care-to-join-desc" className="text-white footer-para">Embark on an exciting career with us to learn and grow alongside<span className="text-white footerPara"> the best in the industry</span></p></div>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <center>
                            <h4 id="current-opening">View Current Openings</h4>
                            <div className="underbar"></div>
                        </center>
                    </div>
                </div>
                <hr className="hr" />
                <div className="row text-center">
                    <div id="foot-nav-parent" className="col-sm-6 col-md-12 text-center ">
                        <div className="foot-nav">
                            <a href="#" className="text-white">Home</a>
                            <a href="#" className="text-white">About Us</a>
                            <a href="#" className="text-white">Services</a>
                            <a href="#" className="text-white">Career</a>
                            <a href="#" className="text-white">Contact</a>
                        </div>
                    </div>
                    <div id="foot-nav-parent" className="col-sm-6  col-md-12 text-center mt-4">
                        <div>
                            <p className="follow">Follow Us:
                            <br/>
                                <svg  id="facebook-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook ml-5" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <svg id="footer-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className    ="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <p className="rights-res">All right reserved ©2021</p><p className="rights-res">zaparetechnologies.com</p>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 des-by">
                        Designed by: Muhammad Usama Tariq
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;