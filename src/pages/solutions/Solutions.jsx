import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import BuissnessSection from "./elements/BuissnessSection";
import Grid from "./elements/Grid";
import KeyFeatures from "./elements/KeyFeatures";
import SolutionBanner from "./elements/SolutionBanner";
import MetaTags from "react-meta-tags";
import HomeServices from "../homePage/HomeServices";

export default class Solutions extends Component {
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
            Experienced Drupal Web Development Solutions - Dotsquares
          </title>
          <meta
            name="description"
            content="Full-cycle Drupal development services from consulting to customization and support. Our end-to-end Drupal solutions can help you transform your business. Get a Free Consultation today."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Experienced Drupal Web Development Solutions - Dotsquares"
          />
          <meta
            property="og:description"
            content="Full-cycle Drupal development services from consulting to customization and support. Our end-to-end Drupal solutions can help you transform your business. Get a Free Consultation today."
          />
          <meta
            property="og:url"
            content="https://drupal.dotsquares.com/solutions/"
          />
          <meta property="og:site_name" content="Drupal Dotsquares" />
          <meta
            property="article:modified_time"
            content="2021-08-10T08:09:34+00:00"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </MetaTags>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}
        <div className="site-content" id="content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <SolutionBanner />
              <BuissnessSection />
              <KeyFeatures />
              <h2 className="new-heading">
                Make An Impact Online With Drupal Solutions
              </h2>
              <Grid />
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
    HomeServices.getSolutions(),
    HomeServices.getKeyFeatures(),
    HomeServices.getDrupalSolution(),
  ]);
}

export const getMetaData = () => {
  return HomeServices.getMetaData('solutions');
}