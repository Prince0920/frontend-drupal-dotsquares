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
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[1] !== 'undefined') {
      this.setState({
        ServiceData: window.__ROUTE_DATA__.apiData[1],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/services/discuss-drupal-projects"
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
      <section className="service-block padding">
        <div className="wrapper">
          <div className="head-part">
            <h2>Discuss Your Current or Next Drupal Project With Dotsquares</h2>
            <p>
              As a leading Drupal Development Company, we deliver our Drupal
              Development Service with a well-thought-out and tested process.
            </p>
          </div>
          <div className="drupal-row">
            {ServiceData !== [] &&
              ServiceData.map((item) => {
                return (
                  <div className="drupal-col-6">
                    <div className="block">
                      <span className="icons">
                        <img
                          loading="lazy"
                          src={ImgBaseUrl + item.field_media_image}
                          alt="lazyload"
                          className="custome-module"
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
