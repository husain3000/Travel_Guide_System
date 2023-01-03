import Link from "next/link";

export default function About() {
    return (
        <div>
            <section className="header_menu" id="header_menu">
                <div className="container-fluid px-0 shadow">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
                        <a className="navbar-brand pl-5 pl-small-0" href="index">
                            <img src="/Photos/logo.png" className="img img-fluid" width="100px" alt="LOGO" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse md:visible navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" href="/" style={{ fontSize: 25 }}><b>Home&emsp;&emsp;&emsp;</b>
                                        <span
                                            className="sr-only"
                                        >(current)
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="login" style={{ fontSize: 25 }}><b>Sign in&emsp;&emsp;&emsp;</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="register" style={{ fontSize: 25 }}><b>Sign up&emsp;&emsp;&emsp;</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="about" style={{ fontSize: 25 }}><b>About Us&emsp;&emsp;&emsp;</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="contact" style={{ fontSize: 25 }}><b>Contact Us</b></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

            <section className="about py-5 my-5" id="about">
                <div className="container " bg>
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">
                            <u>About Us</u>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src="Photos\logo.png" width="434" alt="about" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title">
                                        <br />
                                    </div>
                                    <div className="about_text mt-sm-5">
                                        <p>
                                            Travel Guide System is a platform for those people who loves to travel and who wish to visit new
                                            places. So here we are with an advanced Travel Companion Application which is build using Google
                                            Maps Services, with added features like searching for places, fetching restaurants, hotels and
                                            attractions based on location, Cab booking etc. This Travel Guide App is the best Maps Application
                                            that you can currently find on the internet.
                                        </p>
                                        <p>
                                            Our website provides user friendly interface which will link the user with nearby places, this
                                            application is most beneficial for new visitors in the city.
                                        </p>
                                        <p>
                                            It also provide access to the tourists for exploring the new locations with addresses and the
                                            shortest way from their current location to the visit spot.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" />
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <div className="border border-dark rounded shadow text-center p-3">
                                <div className="mb-4">
                                    <i className="fa fa-map-signs fa-4x mb-3 pt-2" />
                                </div>
                                <div>
                                    <h5>Navigation Facility</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-small-2 mb-small-2">
                            <div className="border border-primary rounded shadow text-center p-3">
                                <div className="mb-4">
                                    <i className="fas fa-car fa-4x mb-3 pt-2" />
                                </div>
                                <div>
                                    <h5>Cab Booking</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="border border-success rounded shadow text-center p-3">
                                <div className="mb-4">
                                    <i className="fas fa-shield-alt fa-4x mb-3 pt-2" />
                                </div>
                                <div>
                                    <h5>Safe Journey</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="border border-danger rounded shadow text-center p-3">
                                <div className="mb-4">
                                    <i className="fas fa-comments fa-4x mb-3 pt-2" />
                                </div>
                                <div>
                                    <h5>Feedback</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <div>
                <section className="footer_section pt-5 pb-2" id="footer_section" />
                <div className="backtop">
                    <a id="button" href="#top" className="btn btn-lg btn-outline-danger" role="button">
                        <i className="fas fa-chevron-up text-dark" />
                    </a>
                </div>
            </div>
        </div>
    );
}
