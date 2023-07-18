import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class UpgradeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[3] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[3],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/homepage/upgrade-drupal9"
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
    var PageShow = PageData[0];
    return (
      <section className="why-build">
        <div className="wrapper">
          <div className="head-part">
            {PageShow !== undefined && (
              <h2 dangerouslySetInnerHTML={{ __html: PageShow.title }} />
            )}
            {PageShow !== undefined && (
              <div
                dangerouslySetInnerHTML={{ __html: PageShow.field_description }}
              />
            )}
          </div>
          {PageShow !== undefined && (
            <img
              loading="lazy"
              src={ImgBaseUrl + PageShow.field_image}
              alt="features-infographic2"
              className="lazyload"
            />
          )}
        </div>
      </section>
    );
  }
}
