import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class DrupalTheme extends Component {
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
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/why-drupal/what-is-drupal"
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
    var { PageData } = this.state;
    return (
      <div className="drupal-theme-bg">
        <div className="wrapper">
          <div className="head-part inner-head">
            {PageData !== undefined && PageData.length > 0 && (
              <h2 dangerouslySetInnerHTML={{ __html: PageData[0].title }} />
            )}
            {PageData !== undefined && PageData.length > 0 && (
              <div
                dangerouslySetInnerHTML={{ __html: PageData[0].field_subtitle }}
              />
            )}
          </div>
          {PageData !== undefined && PageData.length > 0 && (
            <div
              className="drupal-row"
              dangerouslySetInnerHTML={{
                __html: PageData[0].field_description,
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
