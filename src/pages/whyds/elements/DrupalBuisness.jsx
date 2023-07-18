import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class DrupalBuisness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[2] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[2],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/why-drupal/drupal-new-way"
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

  render() {
    var { PageData, ImgBaseUrl } = this.state;
    return (
      <div className="drupal-business-sec">
        <div className="wrapper">
          <div className="drupal-business">
            <div className="drupal-row">
              <div className="drupal-col-6">
                {PageData.length > 0 && (
                  <h2 dangerouslySetInnerHTML={{ __html: PageData[0].title }} />
                )}
                {PageData.length > 0 && (
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: PageData[0].field_subtitle,
                    }}
                  />
                )}
                {PageData.length > 0 && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: PageData[0].field_description,
                    }}
                  />
                )}
              </div>
              <div className="drupal-col-6">
                {PageData.length > 0 && (
                  <img
                    loading="lazy"
                    src={ImgBaseUrl + PageData[0].field_image}
                    alt="why-drupal-info"
                    className=" lazyloaded"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
