import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class KeyFeatures extends Component {
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
      "https://drupal2.24livehost.com/sections/solutions/solutions-drupal-expert"
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
      <div className="drupal-keyfeature">
        <div className="wrapper">
          {ServiceData.length > 0 && (
            <h2 dangerouslySetInnerHTML={{ __html: ServiceData[0].title }} />
          )}

          {ServiceData.length > 0 && (
            <div
              className="drupal-row"
              dangerouslySetInnerHTML={{
                __html: ServiceData[0].field_description,
              }}
            />
          )}

          {/* <div className="drupal-col-6">
              <ul className="list-block">
                <li> Website Maintenance &amp; Support </li>
                <li> Drupal eCommerce Solutions </li>
                <li> Drupal Consultation Solution </li>
              </ul>
            </div> */}
        </div>
      </div>
    );
  }
}
