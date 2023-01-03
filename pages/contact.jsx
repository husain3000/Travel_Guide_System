import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"c01dbb1efb8f8f45ba71c2a38860c509","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }, [])
  return (
    <div>
      <section className="header_menu" id="header_menu">
        <div className="container-fluid px-0 shadow">
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
            <a className="navbar-brand pl-5 pl-small-0" href="index">
              <img
                src="Photos\logo.png"
                className="img img-fluid"
                width="100px"
                alt="LOGO"
              />
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

      <section className="contact py-5 my-5" id="contact">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize"><u>Contact Us</u></h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-phone-alt fa-3x" />
                </div>
                <div>
                  <h3>Lets Talk</h3>
                  <p><b>Phone:</b> +91-9876543210</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-envelope-open fa-3x" />
                </div>
                <div>
                  <h3>Drop a Line</h3>
                  <p><b>Email:</b> xyz@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="far fa-life-ring fa-3x" />
                </div>
                <div>
                  <h3>24x7 Support</h3>
                  <p><b>Customer:</b> 1800 101 303</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
