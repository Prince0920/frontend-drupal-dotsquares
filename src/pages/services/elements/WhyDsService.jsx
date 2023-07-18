import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class WhyDsService extends Component {
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
      "https://drupal2.24livehost.com/sections/services/why-choose-dotsquare"
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
      <section className="whychose-ds">
        <div className="wrapper">
          <div className="drupal-row">
            <div className="drupal-col-5">
              <div className="why-ds-img">
                <img
                  loading="lazy"
                  src="assets/images/why-ds.png"
                  alt="why-ds"
                  className=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="drupal-col-7">
              {PageData.length > 0 && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: PageData[0].field_description,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
