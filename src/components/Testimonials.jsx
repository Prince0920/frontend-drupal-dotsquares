import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import WebApi from "../config/WebApi";
// import { useIsSsr } from "../customHooks/useIsSsr";

const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

let OwlCarousel = isServer
  ? require("react-owl-carousel2")
  : require("react-owl-carousel");

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: [],
      ImgBaseUrl: "https://drupal2.24livehost.com",
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[6] !== 'undefined') {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[6],
      });
    }
    /* WebApi.getRequest(
      "https://drupal2.24livehost.com/testimonials"
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
      <section className="testimonial-bg">
        <div className="wrapper">
          <div className="head-part">
            <p>TESTIMONIALS</p>
            <h2>What our clients say...</h2>
          </div>
          {PageData.length > 0 && (
            <OwlCarousel
              items={1}
              className="owl-carousel owl-theme casestudy-slider"
              loop
            >
              {PageData !== [] &&
                PageData.map((item, index) => {
                  console.log("item", item.field_client);
                  return (
                    <div className="item" key={index}>
                      <div className="slide-text">
                        <div
                          className="quation"
                          dangerouslySetInnerHTML={{
                            __html: item.field_description,
                          }}
                        />
                        <div className="avatar">
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: item.field_client,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </OwlCarousel>
          )}
        </div>
      </section>
    );
  }
}
