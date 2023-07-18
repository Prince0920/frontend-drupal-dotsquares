import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class BuissnessSection extends Component {
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
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/solutions/drupal-solutions"
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
    var { ServiceData } = this.state;
    return (
      <div className="drupal-business-sec drupal-business-solution">
        <div className="wrapper">
          <div className="drupal-business">
            <div className="drupal-row">
              <div className="drupal-col-5">
                <img
                  loading="lazy"
                  src="assets/images/solutions-infographic2.svg"
                  alt="features-infographic"
                  className="lazyload"
                />
              </div>
              <div className="drupal-col-7">
                {ServiceData.length > 0 && (
                  <h2
                    dangerouslySetInnerHTML={{ __html: ServiceData[0].title }}
                  />
                )}
                {ServiceData.length > 0 && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ServiceData[0].field_description,
                    }}
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
