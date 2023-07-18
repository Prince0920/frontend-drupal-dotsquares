import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class KeyFeature extends Component {
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
   /*  WebApi.getRequest(
      "https://drupal2.24livehost.com/sections/why-drupal/drupal-key-features"
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
      <div className="drupal-keyfeature">
        <div className="wrapper">
          {PageData.length > 0 && (
            <h2 dangerouslySetInnerHTML={{ __html: PageData[0].title }} />
          )}

          {PageData.length > 0 && (
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
