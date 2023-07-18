import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import DrupalBuisness from "./elements/DrupalBuisness";
import DrupalTheme from "./elements/DrupalTheme";
import KeyFeature from "./elements/KeyFeature";
import ServiceBlock from "./elements/ServiceBlock";
import WhyDrupal from "./elements/WhyDrupal";
import WhyDsBanner from "./elements/WhyDsBanner";
import MetaTags from "react-meta-tags";
import HomeServices from "../homePage/HomeServices";

export default class WhyDs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleCallback = (value) => {
    if (value != this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    let metaData = {};
    if(typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.metaData){
      metaData = window.__ROUTE_DATA__.metaData;
    }
    return (
      <div id="page" className="site">
        <MetaTags>
          <title>
            Why Choose Drupal - A New Way of Digital Innovation | Dotsquares
          </title>
          <meta
            name="description"
            content="With its great standard features like reliable performance, top-notch security, flexibility, Drupal is an out-of-the-box web content management tool &amp; a customizable platform."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Why Choose Drupal - A New Way of Digital Innovation | Dotsquares"
          />
          <meta
            property="og:description"
            content="With its great standard features like reliable performance, top-notch security, flexibility, Drupal is an out-of-the-box web content management tool &amp; a customizable platform."
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/why-drupal/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-05T12:18:35+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}
        <div className="site-content" id="content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <WhyDsBanner />
              <div class="why-drupal-page">
                <WhyDrupal />
                <DrupalTheme />
                <DrupalBuisness />
                <KeyFeature />
                <ServiceBlock />
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
    HomeServices.whyCooseDrupal(),
    HomeServices.whatIsDrupal(),
    HomeServices.drupalNewWay(),
    HomeServices.drupalKeyFeature(),
    HomeServices.whatDrupalMeans(),
  ]);
}

export const getMetaData = () => {
  return HomeServices.getMetaData('why-drupal');
}