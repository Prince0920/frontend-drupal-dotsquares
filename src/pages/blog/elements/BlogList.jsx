import React, { Component } from "react";
import WebApi from "../../../config/WebApi";

export default class BlogList extends Component {
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
                  <div className='drupal-col-6 case-study-box'>
                    <div className='box-inner'>
                      <div className='case-study-img'>
                        <img
                          loading='lazy'
                          src={ImgBaseUrl + item.field_featured_image}
                          alt='04'
                          className='lazyload'
                        />

                        <a
                          className='ds-btn'
                          href='/case-study/nhtsa'>
                          View Blog
                        </a>
                      </div>
                      <div className='case-study-detail'>
                        <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.body,
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
