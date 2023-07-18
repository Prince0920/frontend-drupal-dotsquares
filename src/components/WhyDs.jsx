import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class WhyDs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[1] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[1],
      });
    }
   /*  WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/homepage/why-dotsquares"
    ).then((response) => {
      // console.log("API Response", response.data);
      this.setState({
        PageData:
          response.data !== undefined && response.data !== null
            ? response.data
            : [],
      });
    }); */
  }

  render() {
    var { PageData, ImgBaseUrl } = this.state;
    return (
      <section className="why-ds-bg padding">
        <div className="wrapper">
          <div className="drupal-row">
            <div className="drupal-col-8">
              <h2>Why Dotsquares?</h2>
              <p>
                As a leading drupal development agency what our expert drupal
                developer brings to the table is rich technical expertise in
                developing Drupal applications or customizations to provide
                optimal outputs as per the requirements.
              </p>
              <p>
                {" "}
                Drupal 7, Drupal 8 & Drupal 9 - No matter whatever the version
                is, Drupal offers a wide range of features with unmatched
                flexibility to get it customized as per the needs.{" "}
              </p>
            </div>
            <div className="drupal-col-4">
              <div className="why-btn"></div>
            </div>
          </div>
          <div className="ds-symbol">
            {PageData !== [] &&
              PageData.map((item) => {
                return (
                  <div className="block margin-top">
                    <img
                      loading="lazy"
                      src={ImgBaseUrl + item.field_media_image}
                      alt="calenter-icon"
                      className=" ls-is-cached lazyloaded"
                    />
                    <h3
                      dangerouslySetInnerHTML={{ __html: item.field_title }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.field_description,
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
