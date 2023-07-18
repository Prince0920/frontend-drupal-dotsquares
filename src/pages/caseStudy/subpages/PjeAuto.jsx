import React, { Component } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import WebApi from "../../../config/WebApi";
import Loader from "../../../components/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import HomeServices from "../../homePage/HomeServices";
import CaseStudySlider from "../elements/CaseStudySlider";

export default class PjeAuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
      loading: false,
      name: "",
      email: "",
      message: "",
      phone: "",
      name_error: false,
      email_error: false,
      message_error: false,
      phone_error: false,
      scroll: false,
      redirect: false,
      referrer: typeof document !== "undefined" ? document.referrer : null,
      userIp: typeof window !== "undefined" ? window.CURRENT_IP : null,
      sendMail: true,
      invalidEmail: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: true });
    });
    if (
      typeof window !== "undefined" &&
      window.__ROUTE_DATA__ &&
      window.__ROUTE_DATA__.apiData &&
      typeof window.__ROUTE_DATA__.apiData[0] !== "undefined"
    ) {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[0],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/2"
    ).then((response) => {
      // console.log("Testimonial API Response", response.data[0]);
      this.setState({
        PageData:
          response.data !== undefined && response.data !== null
            ? response.data
            : [],
      });
    }); */
  }

  handleCallback = (value) => {
    if (value !== this.state.loading) {
      this.setState({ loading: value });
    }
  };

  postData = (data) => {
    // this.props.parentCallback(true);
    this.setState({
      loading: true,
    });

    let text2Cmpr = `ӿ,spam,sex,teen,gamble,girlfriend,joke,Lose weight,naked,Notspam,nude,penis,porn,Viagra,xyz,abc,Amoxicillin,Vape,bitcoins,investieren,Cryptocurrency,Cryptocurrency,Invest $,Bitcoin,prescription,meizitang,backlinks,Surveys,How to make $,BuyEssayClub,Essay,dating,Dissertation,Earnings on the Internet,make money online,kamagra,sildenafil,dapoxetine,money on the Internet,Passive Income,Success Stоriеs,Б,Г,д,Д,И,и,Л,л,п,Ф,ф,Э,э,Ю,ю,Я,я,Ё,ё,Ж,ж,Ц,ц,Ч,ч,Ш,ш,Щ,щ,Ы,ы,Й,й,Ъ,ъ,Ь,ь,з,б,Ѐ,Ё,Ђ,Ѓ,Є,Ѕ,І,Ї,Ј,Љ,Њ,Ћ,Ќ,Ѝ,Ў,Џ,А,Б,В,Г,Д,Е,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я,а,б,в,г,д,е,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я,ѐ,ё,ђ,ѓ,є,ѕ,і,ї,ј,љ,њ,ћ,ќ,ѝ,ў,џ,Ѡ,ѡ,Ѣ,ѣ,Ѥ,ѥ,Ѧ,ѧ,Ѩ,ѩ,Ѫ,ѫ,Ѭ,ѭ,Ѯ,ѯ,Ѱ,ѱ,Ѳ,ѳ,Ѵ,ѵ,Ѷ,ѷ,Ѹ,ѹ,Ѻ,ѻ,Ѽ,ѽ,Ѿ,ѿ,Ҁ,ҁ,҂,$,҃,$,҄,$,҅,$,҆,$,҇,$,҈,$,҉,Ҋ,ҋ,Ҍ,ҍ,Ҏ,ҏ,Ґ,ґ,Ғ,ғ,Ҕ,ҕ,Җ,җ,Ҙ,ҙ,Қ,қ,Ҝ,ҝ,Ҟ,ҟ,Ҡ,ҡ,Ң,ң,Ҥ,ҥ,Ҧ,ҧ,Ҩ,ҩ,Ҫ,ҫ,Ҭ,ҭ,Ү,ү,Ұ,ұ,Ҳ,ҳ,Ҵ,ҵ,Ҷ,ҷ,Ҹ,ҹ,Һ,һ,Ҽ,ҽ,Ҿ,ҿ,Ӏ,Ӂ,ӂ,Ӄ,ӄ,Ӆ,ӆ,Ӈ,ӈ,Ӊ,ӊ,Ӌ,ӌ,Ӎ,ӎ,ӏ,Ӑ,ӑ,Ӓ,ӓ,Ӕ,ӕ,Ӗ,ӗ,Ә,ә,Ӛ,ӛ,Ӝ,ӝ,Ӟ,ӟ,Ӡ,ӡ,Ӣ,ӣ,Ӥ,ӥ,Ӧ,ӧ,Ө,ө,Ӫ,ӫ,Ӭ,ӭ,Ӯ,ӯ,Ӱ,ӱ,Ӳ,ӳ,Ӵ,ӵ,Ӷ,ӷ,Ӹ,ӹ,Ӻ,ӻ,Ӽ,ӽ,Ӿ,ӿ`;

    let msgCompare = this.state.message;

    var statusSpm = text2Cmpr
      .split(",")
      .find((a) => msgCompare.toUpperCase().includes(a.toUpperCase()));

    if (statusSpm == undefined) {
      statusSpm = "";
    }

    if (statusSpm.length > 0) {
      this.setState({
        sendMail: false,
      });
    }
    WebApi.postRequest(
      "https://drupal2.24livehost.com/entity/contact_message",
      data
    )
      .then((response) => {
        // console.log("form post data", response);
        if (response.status === "201") {
          // this.setState({
          //   email: "",
          //   name: "",
          //   phone: "",
          //   message: "",
          // });
          // toast("Form submitted Succesfully.");
          // this.props.parentCallback(false);
          // setTimeout(() => {
          //   this.setState({
          //     redirect: true,
          //   });
          // }, 2000);
        }
      })
      .then(() => {
        let post_form_data = this.state.sendMail
          ? {
              contact_form: [{ target_id: "consultation_for_drupal_services" }],
              name: [{ value: this.state.name }],
              mail: [{ value: this.state.email }],
              subject: [{ value: "Consultation Request" }],
              message: [{ value: this.state.message }],
              field_phone: [{ value: this.state.phone }],
              referral_url: [{ value: this.state.referrer }],
              website_url: [{ value: "https://drupal.dotsquares.com" }],
              ip_address: [{ value: this.state.userIp }],
            }
          : {
              contact_form: [{ target_id: "consultation_for_drupal_services" }],
              name: [{ value: this.state.name }],
              mail: [{ value: this.state.email }],
              subject: [{ value: "Consultation Request" }],
              message: [{ value: this.state.message }],
              field_phone: [{ value: this.state.phone }],
              referral_url: [{ value: this.state.referrer }],
              website_url: [{ value: "https://drupal.dotsquares.com" }],
              ip_address: [{ value: this.state.userIp }],
              is_spam: [{ value: true }],
            };
        console.log("post_form_data", post_form_data);
        WebApi.postRequest(
          "https://drupal2.24livehost.com/mail.php",
          post_form_data
        )
          .then((response) => {
            console.log(response);
            // setTimeout(() => {
            // this.setState({
            //   redirect: true,
            // });
            // }, 2000);
          })
          .catch((error) => console.log("error", error));
      })
      .then(() => {
        let post_form_data = {
          webservice_type: "inquiry",
          summary_work_required: this.state.message,
          message: this.state.message,
          source_website: "https://drupal.dotsquares.com",
          source: "drupal.dotsquares.com",
          technology: "drupal",
          search_url: "https://drupal.dotsquares.com",
          search_keywords: "test1",
          quote_for: "this is for testing1",
          phone: this.state.phone,
          lead_status: "Lead",
          lead_quality: "M",
          lead_name: `lead from drupal.dotsquares.com by ${this.state.name}`,
          gdpr_offers_and_events: 1,
          gdpr_marketing: 1,
          gdpr_longitude: "77.2167",
          gdpr_latitude: "28.6667",
          gdpr_ip: "",
          gdpr_important_technical_updates: 1,
          gdpr_all: 1,
          email: this.state.email,
          detail_specification: this.state.message,
          country: "India1",
          contact_name: this.state.name,
          company_name: "dotsquares",
          company_address: "jaipur",
          referral_url: "https://drupal.com",
        };
        // console.log("post_form_data", post_form_data);
        if (this.state.sendMail) {
          WebApi.postRequest(
            "https://dscwebservices.dotsquares.com/Webhookgeneral.php",
            post_form_data
          )
            .then((response) => {
              // console.log("response", response);
              this.setState({
                email: "",
                name: "",
                phone: "",
                message: "",
                loading: false,
              });
              toast("Form submitted Succesfully.");
              // this.props.parentCallback(false);
              setTimeout(() => {
                this.setState({
                  redirect: true,
                });
              }, 2000);
            })
            .catch((error) => console.log("error", error));
        } else {
          console.log("spaming");
          toast("Form submitted Succesfully.");
          this.setState({
            email: "",
            name: "",
            phone: "",
            message: "",

            // redirect: true,
          });
          setTimeout(() => {
            this.setState({
              loading: false,
              redirect: true,
            });
          }, 2000);
        }
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const strongRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var phoneno =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (this.state.name === "") {
      this.setState({
        name_error: true,
      });
    }
    if (this.state.email === "") {
      this.setState({
        email_error: true,
      });
    }
    if (this.state.email !== "" && !this.state.email.match(strongRegex)) {
      this.setState({
        invalidEmail: true,
      });
    }
    if (this.state.phone !== "") {
      if (!this.state.phone.match(phoneno)) {
        this.setState({
          phone_error: true,
        });
      }
    }
    if (this.state.message === "") {
      this.setState({
        message_error: true,
      });
    }
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      !!strongRegex.test(this.state.email) &&
      this.state.message !== "" &&
      !this.state.phone_error
    ) {
      if (this.state.phone !== "") {
        if (!this.state.phone.match(phoneno)) {
          return true;
        } else {
          let data = {
            contact_form: [{ target_id: "consultation_for_drupal_services" }],
            name: [{ value: this.state.name }],
            mail: [{ value: this.state.email }],
            subject: [{ value: "Consultation Request" }],
            message: [{ value: this.state.message }],
            field_phone: [{ value: this.state.phone }],
          };

          this.postData(data);
        }
      } else {
        let data = {
          contact_form: [{ target_id: "consultation_for_drupal_services" }],
          name: [{ value: this.state.name }],
          mail: [{ value: this.state.email }],
          subject: [{ value: "Consultation Request" }],
          message: [{ value: this.state.message }],
          field_phone: [{ value: this.state.phone }],
        };
        this.postData(data);
      }
    }
  };

  render() {
    var { PageData, ImgBaseUrl } = this.state;
    return (
      <div id="page" className="site">
        <MetaTags>
          <title>
            PJE Automotive Ltd - Car Repair &amp; Servicing - Drupal Dotsquares
          </title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="PJE Automotive Ltd - Car Repair &amp; Servicing - Drupal Dotsquares"
          />
          <meta
            property="og:description"
            content="PJE Automotive Ltd is looking for someone who can understand the infrastructure and underpinning technicality of the website which is important for them, both now and in the future."
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/pje-automotive-ltd/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-09T11:41:04+00:00"
          />
          <meta
            property="og:image"
            content="https://drupal.dotsquares.com/wp-content/uploads/2021/07/04.jpg"
          />
          <meta property="og:image:width" content="819" />
          <meta property="og:image:height" content="460" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}
        {this.state.redirect && <Navigate to="/thanks" replace={true} />}
        <ToastContainer />
        <div className="site-content" id="content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <div className="header-title">
                <h1>PJE Automotive Ltd – Car Repair & Servicing</h1>
              </div>

              {/* <!--full-headline start  here-->  */}
              <section className="full-headline">
                <div className="wrapper">
                  <div className="drupal-row">
                    <div className="drupal-col-12">
                      <div className="content-with-line">
                        <h2>
                          We take pride to serve our customers with best quality
                          services.
                        </h2>
                        <h2>
                          Over the years, we have earned trust of many fortune
                          1000s of companies.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!--with-img-section start  here-->  */}
              <section className="with-img-section">
                <div className="wrapper">
                  <div className="drupal-row drupal-align-items-center">
                    <div className="drupal-col-6 content-part-left">
                      {PageData.length > 0 && (
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_title,
                          }}
                        />
                      )}
                      {PageData.length > 0 && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_description,
                          }}
                        />
                      )}
                    </div>
                    <div className="drupal-col-6">
                      <div className="img-part">
                        {PageData.length > 0 && (
                          <img
                            loading="lazy"
                            src={ImgBaseUrl + PageData[0].field_media_image}
                            alt="Automotive1"
                            className="lazyload"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!--with-img-section bg-sec start  here-->  */}
              <section className="with-img-section bg-sec">
                <div className="wrapper">
                  <div className="drupal-row drupal-align-items-center">
                    <div className="drupal-col-6">
                      <div className="img-part float-right">
                        {PageData.length > 0 && (
                          <img
                            loading="lazy"
                            src={ImgBaseUrl + PageData[1].field_media_image}
                            alt="Automotive2"
                            className="lazyload"
                          />
                        )}
                      </div>
                    </div>
                    <div className="drupal-col-6 content-part-right">
                      {PageData.length > 0 && (
                        <h4>
                          A Background on PJE Automotive Ltd –{" "}
                          <span>Motsbrighton</span>
                        </h4>

                        // <h4
                        //   dangerouslySetInnerHTML={{
                        //     __html: PageData[1].field_title,
                        //   }}
                        // />
                      )}
                      {PageData.length > 0 && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PageData[1].field_description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
              <CaseStudySlider />
              {/* <!--why-ds start  here-->    */}
              <section className="why-ds">
                <div className="wrapper">
                  <div className="drupal-row">
                    <div className="drupal-col-5">
                      {PageData.length > 0 && (
                        <h2>
                          Why did the client come to <span>Dotsquares?</span>
                        </h2>
                        // <h2
                        //   dangerouslySetInnerHTML={{
                        //     __html: PageData[2].field_title,
                        //   }}
                        // />
                      )}
                    </div>
                    <div className="drupal-col-7">
                      {PageData.length > 0 && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PageData[2].field_description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* <!--form-section start  here-->  */}
              <section className="form-section">
                <div className="wrapper">
                  <div className="form-block">
                    <h2>Get a free initial consultation for Drupal Services</h2>
                    <p>
                      Please provide as much information as possible and we'll
                      contact you within 24 hours to advise you of our next
                      steps forward for the project.
                    </p>
                    <form
                      className="wpcf7-form"
                      onSubmit={(e) => this.handleSubmit(e)}
                    >
                      <div className="comanform">
                        <div className="row-control">
                          <div className="control">
                            <input
                              className="input-text"
                              type="text"
                              placeholder="Name"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({
                                  name: e.target.value,
                                  name_error: false,
                                })
                              }
                            />

                            {this.state.name_error && (
                              <span style={{ color: "red", fontSize: 12 }}>
                                {"The field is required. "}
                              </span>
                            )}
                          </div>
                          <div className="control">
                            <input
                              className="input-text"
                              type="text"
                              placeholder="Email Address"
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({
                                  email: e.target.value,
                                  email_error: false,
                                  invalidEmail: false,
                                })
                              }
                            />
                            {this.state.invalidEmail && (
                              <span style={{ color: "red", fontSize: 12 }}>
                                {"The e-mail address entered is invalid."}
                              </span>
                            )}
                            {this.state.email_error && (
                              <span style={{ color: "red", fontSize: 12 }}>
                                {"The field is required. "}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="control">
                          <input
                            className="input-text"
                            type="text"
                            placeholder="Phone"
                            value={this.state.phone}
                            onChange={(e) =>
                              this.setState({
                                phone: e.target.value,
                                phone_error: false,
                              })
                            }
                          />
                          {this.state.phone_error && (
                            <span style={{ color: "red", fontSize: 12 }}>
                              {"The telephone number is invalid. "}
                            </span>
                          )}
                        </div>
                        <div className="control">
                          <input
                            className="input-text"
                            type="text"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={(e) =>
                              this.setState({
                                message: e.target.value,
                                message_error: false,
                              })
                            }
                          />
                          {this.state.message_error && (
                            <span style={{ color: "red", fontSize: 12 }}>
                              {"The field is required. "}
                            </span>
                          )}
                        </div>
                        <div className="action">
                          <button type="submit" className="btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export const loadData = () => {
  return Promise.all([HomeServices.getCaseStudyData(2)]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData("pje-automotive-ltd");
};
