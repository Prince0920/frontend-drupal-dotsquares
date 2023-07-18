import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class CaseStudyList extends Component {
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
    /* WebApi.getRequest("https://drupal2.24livehost.com/case-study").then(
      (response) => {
        // console.log("Testimonial API Response", response.data[0]);
        this.setState({
          PageData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      }
    ); */
  }

  render() {
    var { PageData, ImgBaseUrl } = this.state;
    return (
      <div className="case-study-list">
        <div className="wrapper">
          <div className="drupal-row">
            {PageData.length > 0 &&
              PageData.map((item) => {
                return (
                  <div className="drupal-col-6 case-study-box">
                    <div className="box-inner">
                      <div className="case-study-img">
                        <img
                          loading="lazy"
                          src={ImgBaseUrl + item.field_media_image}
                          alt="04"
                          className="lazyload"
                        />

                        {item.nid === "9" && (
                          <a className="ds-btn" href="/case-study/nhtsa">
                            View Case Studies
                          </a>
                        )}
                        {item.nid === "10" && (
                          <a className="ds-btn" href="/case-study/teceze">
                            View Case Studies
                          </a>
                        )}
                        {item.nid === "11" && (
                          <a className="ds-btn" href="/case-study/medipro-aesthetics">
                            View Case Studies
                          </a>
                        )}
                        {item.nid === "2" && (
                          <a className="ds-btn" href="/case-study/pje-automotive-ltd">
                            View Case Studies
                          </a>
                        )}
                      </div>
                      <div className="case-study-detail">
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
      </div>
    );
  }
}
