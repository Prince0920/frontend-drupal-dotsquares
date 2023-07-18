import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[2] !== 'undefined') {
      this.setState({
        ServiceData: window.__ROUTE_DATA__.apiData[2],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/homepage/services"
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
    console.log('ServiceData', ServiceData)
    return (
      <section className="service-block padding">
        <div className="wrapper">
          <div className="head-part">
            <h2>Our Drupal Development Services</h2>
            <p>Hire Drupal Developer At Dotsquares</p>
          </div>
          <div className="drupal-row">
            {ServiceData.length > 0 &&
              ServiceData.map((item) => {
                return (
                  <div key={item.nid} className="drupal-col-4">
                    <div className="block">
                      <span className="icons">
                        <img
                          loading="lazy"
                          src={ImgBaseUrl + item.field_media_image}
                          alt="lazyload"
                          className="design-icon"
                        />
                      </span>
                      <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.field_short_description,
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
