import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class ServiceBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[4] !== 'undefined') {
      this.setState({
        ServiceData: window.__ROUTE_DATA__.apiData[4],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/why-drupal/what-drupal-means"
    ).then((response) => {
      // console.log("API Response", response.data);
      this.setState({
        ServiceData:
          response.data !== undefined && response.data !== null
            ? response.data
            : [],
      });
    }); */
  }

  render() {
    var { ServiceData, ImgBaseUrl } = this.state;
    return (
      <section className="service-block ourdrupal padding">
        <div className="wrapper">
          <div className="head-part">
            <h2>What Drupal Means</h2>
            {/* <!--<p>Hire Drupal Developer At Dotsquares</p>--> */}
          </div>
          <div className="drupal-row">
            {ServiceData !== [] &&
              ServiceData.map((item) => {
                return (
                  <div className="drupal-col-4">
                    <div className="block">
                      <span className="icons">
                        <img
                          loading="lazy"
                          src={ImgBaseUrl + item.field_media_image}
                          alt="lazyload"
                          className="design-icon"
                        />
                      </span>
                      <h4
                        dangerouslySetInnerHTML={{ __html: item.field_title }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.field_description,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
