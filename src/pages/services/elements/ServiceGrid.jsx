import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class ServiceGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[0] !== 'undefined') {
      this.setState({
        ServiceData: window.__ROUTE_DATA__.apiData[0],
      });
    }
    /* WebApi.getRequest("https://drupal2.24livehost.com/services").then(
      (response) => {
        // console.log("API Response", response.data);
        this.setState({
          ServiceData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      }
    ); */
  }

  render() {
    var { ServiceData, ImgBaseUrl } = this.state;
    return (
      <div className="wrapper">
        <div className="service-grid">
          <div className="head-part inner-head">
            <h2>
              Looking for Drupal Specialists to Make <br /> Your Business
              Successful?
            </h2>
            <p>Hire Drupal Developer At Dotsquares</p>
          </div>
          <div className="drupal-row">
            <div className="drupal-col-6">
              <p>
                Are you seeking a flexible, dependable, and customized web
                content management tool and platform to meet your content
                management requirements? Are you seeking a safe, and adaptable
                content management system that allows you to design the features
                you want without having to deal with the ones you don’t?
              </p>
            </div>
            <div className="drupal-col-6">
              <p>
                Dotsquares is a major Drupal development company that offers a
                variety of Drupal web development, Drupal module development,
                Drupal consultancy, and other Drupal web development services.
                To make the most of this sophisticated open source content
                management system, outsource Drupal development services to us.
              </p>
            </div>
          </div>
          <h2 className="new-heading">
            Our Offered Drupal Development Services
          </h2>
          {ServiceData !== [] &&
            ServiceData.map((item) => {
              return (
                <div key={item.nid} className="row-block">
                  <div className="block">
                    <img
                      loading="lazy"
                      src={ImgBaseUrl + item.field_media_image}
                      alt="design-development"
                      className="lazyloaded"
                    />
                  </div>
                  <div className="block">
                    <div className="text">
                      <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.field_description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
