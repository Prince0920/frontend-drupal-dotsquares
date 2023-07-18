import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import WebApi from "../../config/WebApi";
import MetaTags from "react-meta-tags";
import HomeServices from "../homePage/HomeServices";

export default class TermsAndConditions extends Component {
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
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[0] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[0],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/terms-and-conditions"
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
          <title>Terms &amp; Conditions - Drupal Dotsquares</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Terms &amp; Conditions - Drupal Dotsquares"
          />
          <meta
            property="og:description"
            content="The Head Office of Dotsquares Limited is located at – Unit 2, Albourne Court,Henfield Road, Albourne, West Sussex, BN6 9FF, United Kingdom. These terms and conditions apply to work done from any office of Dotsquares Limited or of companies within the Dotsquares group of companies. The primary area of business for Dotsquares is (but not&hellip; Continue reading Terms &#038; Conditions"
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/terms-conditions/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-10T06:55:45+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="15 minutes" />
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
    HomeServices.getTermsAndConditions()
  ]);
}

export const getMetaData = () => {
  return HomeServices.getMetaData('terms-conditions');
}