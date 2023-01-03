import Head from 'next/head'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <header></header>
      <Main />
      <footer></footer>
    </>
  )
}


function Main() {
  return (
    <div>
      <section className="header_menu" id="header_menu">
        <div className="container-fluid px-0 shadow">
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <Link className="navbar-brand pl-5 pl-small-0" href="index">
              <img
                src="Photos\logo.png"
                className="img img-fluid"
                width="100px"
                alt="LOGO"
              />
            </Link>
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
              <div className="profile mr-3">
                <Link href="login">
                  <i className="fas fa-car-duotone fa-3x" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className="header_carousel" id="header_carousel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="Photos\Taj1.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="Photos\Fort1.jpg" className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="Photos\fort2.jpg" className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src="Photos\assam1.jpg" className="d-block w-100" alt="Fourth slide" />
            </div>
          </div>
          <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </Link>
          <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </section>

      <section className="products py-5 my-5 bg-light" id="products">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1><u>Places that has to be visited</u></h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <img
                    src="Photos\mumbai.jpg"
                    width="330"
                    height="334"
                    alt=""
                  />
                </div>
                <div className="product-caption my-3">
                  <h4>Mumbai</h4>

                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <img
                    src="Photos\lake-ladakh.jpg"
                    width="330"
                    height="334"
                    alt=""
                  />
                </div>
                <div className="product-caption my-3">
                  <h4>Pangong Lake</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <img
                    src="Photos\palace1.jpg"
                    width="330"
                    height="334"
                    alt=""
                  />

                </div>
                <div className="product-caption my-3">
                  <h4>Mysore Palace</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <img
                    src="Photos\Taj2.jpg"
                    width="330"
                    height="300"
                    alt=""
                  />
                </div>
                <div className="product-caption my-3">
                  <h4>Taj Mahal</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <img
                    src="Photos\chittorgarh.jpg"
                    width="330"
                    height="300"
                    alt=""
                  />
                </div>
                <div className="product-caption my-3">
                  <h4>Chittorgarh</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <img
                    src="Photos\redfort.jpg"
                    width="330"
                    height="300"
                    alt="Headphone"
                  />

                </div>
                <div className="product-caption my-3">
                  <h4>Red Fort</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature py-5 mt-5" id="feature" style={{ backgroundColor: '#1e90ff' }}>
        <div className="container">
          <div className="section_title text-center mb-5">
            <h1 style={{ fontFamily: 'Verdana', color: '#000000' }}><u>Our Features</u></h1>
          </div>
          <div className="row text-white">
            <div className="col-md-4 col-12 shadow p-3">
              <div className="text-center">
                <div className="mb-4">
                  <i className="fa fa-map-signs fa-3x mb-3 pt-2" />
                  <div>
                    <h3>Navigation Facility</h3>
                  </div>
                </div>
                <div>
                  The tourist can easily configures the application by simple login and defining a destination.
                  This website uses Google map services to calculate the best & shortest route according with the user
                  configuration and restrictions. This platform will guide you turn by turn using visual<br /> information.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 shadow p-3 mt-small-5 mb-small-5">
              <div className="text-center">
                <div className="mb-4">
                  <i className="fas fa-car fa-3x mb-3 pt-2" />
                  <div>
                    <h3>Cab Booking</h3>
                  </div>
                </div>
                <div>
                  We only wish to provide best services to our travellers, keeping all this in mind, we created this platform which is very seamless
                  and manageable for you to book a cab online. we offer extremely simple and painless interface for you to make your journey hassel free with minimum fare.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 shadow p-3">
              <div className="text-center">
                <div className="mb-4">
                  <i className="fas fa-comment-dots fa-3x mb-3 pt-2" />
                  <div>
                    <h3>24/7 Support</h3>
                  </div>
                </div>
                <div>
                  we give 24/7 support, It is a customer service strategy that involves providing support 24 hours a day,
                  and 7 days a week. In other words, this 24/7 support model ensures that a customer is able to
                  get their issues resolved no matter what day or time it is.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <hr />

      <div className="backtop">
        <Link id="button" href="#top" className="btn btn-lg btn-outline-danger" role="button">
          <i className="fas fa-chevron-up text-dark" />
        </Link>
      </div>
    </div>
  );
}
