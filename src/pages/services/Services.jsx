import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import BannerMinni from "./elements/BannerMinni";
import ServiceBlock from "./elements/ServiceBlock";
import ServiceGrid from "./elements/ServiceGrid";
import WhyDsService from "./elements/WhyDsService";
import MetaTags from "react-meta-tags";
import HomeServices from "../homePage/HomeServices";

export default class Services extends Component {
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
            Our Offered Drupal Web Development Services - Dotsquares
          </title>
          <meta
            name="description"
            content="Dotsquares offers a variety of - Drupal web development, Drupal module development, Drupal consultancy &amp; other Drupal web development services. Get a Free Consultation today."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Our Offered Drupal Web Development Services - Dotsquares"
          />
          <meta
            property="og:description"
            content="Dotsquares offers a variety of - Drupal web development, Drupal module development, Drupal consultancy &amp; other Drupal web development services. Get a Free Consultation today."
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/services/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-05T12:20:09+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}
        <div className="site-content" id="content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <BannerMinni />
              <ServiceGrid />
              <ServiceBlock />
              <WhyDsService />
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
    HomeServices.getAllServices(),
    HomeServices.getServiceBlock(),
    HomeServices.whyCooseDS()
  ]);
}

export const getMetaData = () => {
  return HomeServices.getMetaData('services');
}