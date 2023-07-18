import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class Grid extends Component {
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
      "https://drupal2.24livehost.com/sections/solutions/drupal-solutions-section"
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
      <div className="service-grid">
        <div className="wrapper">
          {ServiceData !== [] &&
            ServiceData.map((item) => {
              return (
                <div className="row-block">
                  <div className="block">
                    <img
                      loading="lazy"
                      src={ImgBaseUrl + item.field_media_image}
                      alt="custom-module-development"
                      className=" ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="block">
                    <div className="text">
                      <h2
                        dangerouslySetInnerHTML={{ __html: item.field_title }}
                      />
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
