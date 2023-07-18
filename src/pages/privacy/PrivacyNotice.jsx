import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import WebApi from "../../config/WebApi";
import MetaTags from "react-meta-tags";
import HomeServices from "../homePage/HomeServices";

export default class PrivacyNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
      loading: false,
      scroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: true });
    });

    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[0] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[0],
      });
    }

    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/privacy-policy"
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

  render() {
    var { PageData } = this.state;
    return (
      <div id="page" class="site">
        <MetaTags>
          <title>Privacy Notice - Drupal Dotsquares</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Privacy Notice - Drupal Dotsquares"
          />
          <meta
            property="og:description"
            content="Dotsquares understands that your privacy is important to you and that you care about how your information is used and shared online. We will only collect and use information in ways that are useful to you and in a manner consistent with your rights and Our obligations under the law. This Notice applies to Our&hellip; Continue reading Privacy Notice"
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/privacy-notice/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-10T06:50:29+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="8 minutes" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}
        <div className="site-content" id="content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              {/* <!--mini hero banner  start  here--> */}
              <div className="header-title">
                {PageData.length > 0 && (
                  <h1 dangerouslySetInnerHTML={{ __html: PageData[0].title }} />
                )}
              </div>
              {/* <!--Content  here-->  */}
              <div className="wrapper">
                {PageData.length > 0 && (
                  <div dangerouslySetInnerHTML={{ __html: PageData[0].body }} />
                )}
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export const loadData = () => {
  return Promise.all([
    HomeServices.getPrivacyPolicy()
  ]);
}

export const getMetaData = () => {
  return HomeServices.getMetaData('privacy-notice');
}