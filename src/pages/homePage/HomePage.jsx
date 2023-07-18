import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import BrandBlock from "../../components/BrandBlock";
import BuisnessSection from "../../components/BuisnessSection";
import CaseStudy from "../../components/CaseStudy";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Integration from "../../components/Integration";
import Loader from "../../components/Loader";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import UpgradeSection from "../../components/UpgradeSection";
import WhyDs from "../../components/WhyDs";
import MetaTags from "react-meta-tags";
import HomeServices from "./HomeServices";

export default function HomePage() {
  const [loading, setLoading] = React.useState(false);
  let metaData = {};
  if (
    typeof window !== "undefined" &&
    window.__ROUTE_DATA__ &&
    window.__ROUTE_DATA__.metaData
  ) {
    metaData = window.__ROUTE_DATA__.metaData;
  }
  const handleCallback = (value) => {
    // console.log("loader value", value);
    if (value !== loading) {
      setLoading(value);
    }
  };

  return (
    <div id="page" className="site">
      <MetaTags>
        <title>
          {metaData.title ||
            "Hire Drupal Developers At Dotsquares | Drupal Development Company"}
        </title>
        <meta
          name="description"
          content={
            metaData.description ||
            "Looking for a Drupal development company you can rely on? Get a supportive Drupal Web Development experience with care and precision with Dotsquares. Get a Free Consultation today."
          }
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            metaData.title ||
            "Hire Drupal Developers At Dotsquares | Drupal Development Company"
          }
        />
        <meta
          property="og:description"
          content={
            metaData.description ||
            "Looking for a Drupal development company you can rely on? Get a supportive Drupal Web Development experience with care and precision with Dotsquares. Get a Free Consultation today."
          }
        />
        <meta property="og:url" content="https://drupal.dotsquares.com/" />
        <meta property="og:site_name" content="Drupal Dotsquares" />
        <meta
          property="article:modified_time"
          content="2022-03-03T13:24:36+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </MetaTags>
      <Header parentCallback={handleCallback} />
      {loading && <Loader />}
      <div className="site-content" id="content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <Banner parentCallback={handleCallback} />
            <BuisnessSection />
            <WhyDs />
            <Services />
            <UpgradeSection />
            <CaseStudy />
            <Integration />
            <Testimonials />
            <BrandBlock />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const loadData = () => {
  return Promise.all([
    HomeServices.getBussinessSection(),
    HomeServices.whyDS(),
    HomeServices.getServices(),
    HomeServices.getUpgradeSaction(),
    HomeServices.getCaseStudy(),
    HomeServices.getIntegrations(),
    HomeServices.getTestimonials(),
    HomeServices.getBrands(),
  ]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData("homepage");
};
