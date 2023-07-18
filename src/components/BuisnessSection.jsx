import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class BuisnessSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[0] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[0],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/homepage/why-choose-drupal-content"
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
      <section className="drupal-business-sec">
        <div className="wrapper">
          <div className="drupal-business">
            <div className="drupal-row">
              <div className="drupal-col-6">
                {PageShow !== undefined && (
                  <h2
                    data-aos="fade-right"
                    data-aos-delay="200"
                    dangerouslySetInnerHTML={{ __html: PageShow.title }}
                  />
                )}
                {PageShow !== undefined && (
                  <h3
                    data-aos="fade-right"
                    data-aos-delay="300"
                    dangerouslySetInnerHTML={{
                      __html: PageShow.field_subtitle,
                    }}
                  />
                )}
                {PageShow !== undefined && (
                  <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    dangerouslySetInnerHTML={{
                      __html: PageShow.field_description,
                    }}
                  />
                )}
                <a
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="btn ds-btn"
                  href="/enquiry"
                >
                  {" "}
                  Enquire Now
                </a>
              </div>
              <div className="drupal-col-6">
                {PageShow !== undefined && (
                  <img
                    loading="lazy"
                    src={ImgBaseUrl + PageShow.field_image}
                    alt="features-infographic"
                    className="lazyload"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
