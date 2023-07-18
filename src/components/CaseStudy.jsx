import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import WebApi from "../config/WebApi";

const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

let OwlCarousel = isServer
  ? require("react-owl-carousel2")
  : require("react-owl-carousel");

export default class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CaseStudyData: [],
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.apiData && typeof window.__ROUTE_DATA__.apiData[4] !== 'undefined') {
      this.setState({
        CaseStudyData: window.__ROUTE_DATA__.apiData[4],
      });
    }
    /* WebApi.getRequest("https://drupal2.24livehost.com/case-study").then(
      (response) => {
        // console.log("API Response", response.data);
        this.setState({
          CaseStudyData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      }
    ); */
  }

  render() {
    var { CaseStudyData } = this.state;
    return (
      <section className="casestudy-block-sec">
        <div className="casestudy-block padding">
          <div className="head-part">
            <h2>Case Study</h2>
            <p></p>
          </div>
          <div className="casestudy">
            <div className="img">
              <img
                loading="lazy"
                src="assets/images/casestudy-img.jpg"
                alt="casestudy-img"
                className="lazyload"
              />
            </div>
            {CaseStudyData.length > 0 && (
              <OwlCarousel
                loop={true}
                items={1}
                className="study-slider owl-carousel owl-theme casestudy-slider"
              >
                {CaseStudyData !== [] &&
                  CaseStudyData.map((item) => {
                    return (
                      <div key={item.nid} className="item">
                        <div className="slide-text">
                          <h2
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />

                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.field_description,
                            }}
                          />

                          {item.nid === "9" && (
                            <a className="btn ds-btn" href="/case-study/nhtsa">
                              {" "}
                              Read More
                            </a>
                          )}
                          {item.nid === "10" && (
                            <a className="btn ds-btn" href="/case-study/teceze">
                              {" "}
                              Read More
                            </a>
                          )}
                          {item.nid === "11" && (
                            <a
                              className="btn ds-btn"
                              href="/case-study/medipro-aesthetics"
                            >
                              {" "}
                              Read More
                            </a>
                          )}
                          {item.nid === "2" && (
                            <a
                              className="btn ds-btn"
                              href="/case-study/pje-automotive-ltd"
                            >
                              {" "}
                              Read More
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>
    );
  }
}
