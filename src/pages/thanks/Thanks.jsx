import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import WebApi from "../../config/WebApi";
import MetaTags from "react-meta-tags";

export default class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      pageData_show: "",
      ImgBaseUrl: "https://drupal2.24livehost.com",
      loading: false,
      scroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: true });
    });
    WebApi.getRequest("https://drupal2.24livehost.com/thanks").then(
      (response) => {
        if (response.data !== undefined && response.data !== null) {
          console.log(
            "Testimonial API Response",
            response.data[0].body[0].value
          );
        }
        // console.log("Testimonial API Response", response);
        this.setState({
          pageData_show:
            response.data !== undefined && response.data !== null
              ? response.data[0].body[0].value
              : "",
          PageData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      }
    );
  }

  handleCallback = (value) => {
    if (value !== this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    return (
      <div id="page" class="site">
        <MetaTags>
          <title>Thank You for Your Enquiry - Drupal Dotsquares</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Thank You for Your Enquiry - Drupal Dotsquares"
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/thankyou/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-07-22T13:11:56+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}

        {/* <!--Middle page content start  here--> */}
        {this.state.pageData_show !== undefined &&
          this.state.pageData_show !== "" && (
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.pageData_show,
              }}
            />
          )}
        {/* <div id="primary" className="content-area"> */}
        {/* <main id="main" className="site-main"> */}

        {/* <!--mini hero banner  start  here--> */}

        {/* <div className="header-title">
                <h1>Thank You for Your Enquiry</h1>
              </div> */}

        {/* <!--why-drupal-page start  here-->  */}

        {/* comment  */}
        {/* <div className="thanks">
                <div className="head-part inner-head">
                  <div className="wrapper">
                    <h4>
                      We appreciate you for taking the time to submit your
                      requirements and showing interest in our services. We have
                      received your enquiry and we will get back to you at the
                      earliest.
                    </h4>
                  </div>
                </div> */}
        {/* comment  */}

        {/* <!--drupal-business-sec start  here-->  */}
        {/* comment  */}
        {/* <div className="drupal-thanks-sec">
                  <div className="wrapper">
                    <div className="drupal-thanks">
                      <div className="drupal-row">
                        <div className="drupal-col-7">
                          <div className="drupal-info-wrap">
                            <div className="drupl-logo-wrap">
                              <img
                                src="assets/images/dotsquare.png"
                                alt="logo"
                              />
                              <img
                                src="assets/images/ds-drupal.png"
                                alt="logo"
                              />
                              <img
                                src="assets/images/logo-aqua.png"
                                alt="logo"
                              />
                            </div>
                            <div className="drupal-info-content">
                              <ul className="content-wrap">
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-four.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Your enquiry received{" "}
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-five.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Provides optimum solution.
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-four.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Your enquiry received{" "}
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-five.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Provides optimum solution.
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-four.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Your enquiry received{" "}
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-five.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Provides optimum solution.
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-four.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Your enquiry received{" "}
                                  </div>
                                </li>
                                <li>
                                  <div className="icon-wrap">
                                    <img
                                      src="assets/images/icon-five.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-wrap">
                                    Provides optimum solution.
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="drupal-col-5">
                          <h2> What’s Next:</h2>
                          <p>
                            Although this is an automated reply, your enquiry
                            has been passed through to one of our Strategy and
                            Solutions Specialists and they will contact you soon
                            via email and/or phone. If you have any queries on
                            how our process works, please feel free to get in
                            touch with our Business Development Manager, Verona
                            Hodgson verona@dotsquares.com in addition to a call
                            and email, we will try to reach out to you on
                            LinkedIn so that you can get our regular service
                            updates.
                          </p>
                          <p className="drupal-contact">
                            Or you can always call us now on:{" "}
                            <a href="tel:01273 575190">01273 575190</a>
                          </p>
                          <p className="drupal-contact">
                            {" "}
                            from the UK,{" "}
                            <a href="tel:+13015639488">+1 301 563 9488</a>
                          </p>
                          <p className="drupal-contact">
                            from the USA,{" "}
                            <a href="tel:+610395119598">+61 03 9511 9598</a>
                          </p>
                          <p className="drupal-contact">
                            {" "}
                            OR from the Australia.{" "}
                            <a href="tel:+610386768288">
                              +61 03 8676 8288
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="drupal-about-more">
                    <div className="wrapper">
                      <h2>More About us</h2>
                      <div className="drupal-row">
                        <div className="drupal-col-6">
                          <ul>
                            <li>20 years of Industry experience since 2002.</li>
                            <li>
                              Team of 900+ skilled full time Analysts,
                              Developers with industry certifications from major
                              Providers.
                            </li>
                            <li>
                              Team of Certified Scrum Agile Project Managers.
                            </li>
                            <li>
                              Project Management offices in the UK, USA,
                              Australia and India with satellite offices in
                              France & Dubai.
                            </li>
                            <li>
                              3 fully equipped development centres in India with
                              ISO 9001 ISO 27001 Certification. Gartner
                              Recommended Vendor since 2018.
                            </li>
                            <li>
                              Assisted Fujitsu to obtain Guinness World Record.
                            </li>
                            <li>
                              Member of the International Association of
                              Outsourcing Professionals.
                            </li>
                          </ul>
                        </div>
                        <div className="drupal-col-6">
                          <ul>
                            <li>
                              Direct developer interaction using Skype, Phone,
                              Emails, Webex, MS Teams and our award winning
                              bespoke Project Management Tools.
                            </li>
                            <li>
                              Work on Time and Material, Agile Methodology.
                            </li>
                            <li>
                              All projects delivered using Scrum Agile
                              methodology.
                            </li>
                            <li>
                              Strong DevOps capabilities with full scalability
                              and reporting.
                            </li>
                            <li>
                              One stop solution for Design, Development, Hosting
                              and Digital Marketing (and many other services).
                            </li>
                            <li>
                              Approved supplier of Microsoft, Google,
                              Salesforce, and Adobe Commerce amongst many
                              others.
                            </li>
                            <li>
                              Official member of the Forbes technology council
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
        {/* commnet  */}

        {/* <div className="drupal-company-website">
                    <div className="wrapper">
                      <h2>Company websites</h2>
                      <div className="drupal-row">
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_uk.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/tii_india.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_au.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/inventive.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/inventive_logo.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_uk.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/tii_india.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_au.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/inventive.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/inventive_logo.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_uk.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/tii_india.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/team_au.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/team_logo.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="drupal-col-3">
                          <div className="ds_call">
                            <div className="ds_head_contant">
                              <h3>
                                <a href="#">Team in India ( UK)</a>
                              </h3>
                            </div>
                            <a href="#" className="catalog_ds">
                              <div className="catalog_ds_inner">
                                <div className="catalog_ds_img">
                                  <img
                                    src="assets/images/inventive.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div className="catalog_ds_logo">
                                  <img
                                    src="assets/images/inventive_logo.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

        {/* comment  */}
        {/* </div>
              </div>
            </main>
          </div> */}
        {/* </div> */}

        <Footer />
      </div>
    );
  }
}
