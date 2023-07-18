import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class Integration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[5] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[5],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/homepage/drupal-integrations"
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
      <section className="drupal-int">
        <div className="head-part">
          {PageShow !== undefined && (
            <h2 dangerouslySetInnerHTML={{ __html: PageShow.title }} />
          )}
          {PageShow !== undefined && (
            <div
              dangerouslySetInnerHTML={{ __html: PageShow.field_subtitle }}
            />
          )}
        </div>
        <div className="int-feature">
          <div className="int-img">
            {PageShow !== undefined && (
              <img
                loading="lazy"
                src={ImgBaseUrl + PageShow.field_image}
                alt="int-img"
                className=" ls-is-cached lazyloaded"
              />
            )}
          </div>
          <div className="f-icon one">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/design-icon.png"
                alt="design-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4> Initial Discussion</h4>
          </div>
          <div className="f-icon two">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/custome-module.png"
                alt="custome-module-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4> Project Analysis</h4>
          </div>
          <div className="f-icon three">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/custome-icon.png"
                alt="custome-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4> Team Selection</h4>
          </div>
          <div className="f-icon four">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/integration-icon.png"
                alt="integration-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4> Hiring Model Selection</h4>
          </div>
          <div className="f-icon five">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/migrate-icon.png"
                alt="migrate-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4> Project Kick-Off</h4>
          </div>
          <div className="f-icon six">
            <span className="icons">
              <img
                loading="lazy"
                src="assets/images/support-icon.png"
                alt="support-icon-1"
                className=" ls-is-cached lazyloaded"
              />
            </span>
            <h4>Performance Monitoring</h4>
          </div>
        </div>
      </section>
    );
  }
}
