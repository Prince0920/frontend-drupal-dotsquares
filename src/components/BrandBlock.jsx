import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class BrandBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[7] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[7],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/trust-big-small-everyday"
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
    var { PageData } = this.state;
    var PageShow = PageData[0];
    return (
      <section className="brand-block">
        <div className="wrapper">
          <div className="head-part">
            {PageShow !== undefined && (
              <h2 dangerouslySetInnerHTML={{ __html: PageShow.title }} />
            )}
            {PageShow !== undefined && (
              <div
                style={{ fontSize: 14, fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: PageShow.field_subtitle }}
              />
            )}
          </div>
          <div className="brand-logo" data-aos="fade-up" data-aos-delay="400">
            <ul>
              <li>
                <img
                  loading="lazy"
                  src="assets/images/motsbrighton-logo.png"
                  alt="motsbrighton-logo"
                  className=" ls-is-cached lazyloaded"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  src="assets/images/nhtsa-logo.png"
                  alt="nhtsa-logo"
                  className=" ls-is-cached lazyloaded"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  src="assets/images/teceze-logo.png"
                  alt="teceze-logo"
                  className=" ls-is-cached lazyloaded"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  src="assets/images/mediproaesthetics-logo.png"
                  alt="mediproaesthetics-logo"
                  className=" ls-is-cached lazyloaded"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
