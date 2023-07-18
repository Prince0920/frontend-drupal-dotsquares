import React, { Component } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "../../../components/Loader";

import { Navigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import HomeServices from "../../homePage/HomeServices";

export default class Member extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      PageData: props.apiData ? props.apiData[0] : [],
      ImgBaseUrl: 'https://drupal2.24livehost.com',
      loading: false,
    };
  }

  componentDidMount() {
    if (
      typeof window !== 'undefined' &&
      window.__ROUTE_DATA__ &&
      window.__ROUTE_DATA__.apiData &&
      typeof window.__ROUTE_DATA__.apiData[0] !== 'undefined'
    ) {
      this.setState({
        PageData: window.__ROUTE_DATA__.apiData[0],
      });
    }
  }

  handleCallback = value => {
    if (value !== this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    var { PageData, ImgBaseUrl } = this.state;
    console.log("PageData", PageData);
    return (
      <div
        id='page'
        className='site'>
        <Header parentCallback={this.handleCallback} />
        {this.state.loading && <Loader />}

        <div
          className='site-content'
          id='content'>
          <div
            id='primary'
            className='content-area'>
            <main
              id='main'
              className='site-main'>
              {/* headbannner */}
              <div className='header-title'>
                <h1>Team Member Name</h1>
              </div>
              {/* headbanner  */}

              {/* section  */}
              <section className='full-headline'>
                <div className='wrapper'>
                  <div className='drupal-row'>
                    <div className='drupal-col-12'>
                      <div className='content-with-line'>
                        <h2>We take pride to serve our customers with best quality services.</h2>
                        <h2>
                          Over the years, we have earned trust of many fortune 1000s of companies.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* section  */}

              {/* <!--with-img-section start  here-->  */}
              <section className="with-img-section midpro-aest">
                <div className="wrapper">
                  <div className="drupal-row drupal-align-items-center">
                    <div className="drupal-col-6 content-part-left">
                      {PageData.length > 0 && (
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].title,
                          }}
                        />
                      )}
                      {PageData.length > 0 && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_position,
                          }}
                        />
                      )}
                    </div>
                    <div className="drupal-col-6">
                      <div className="img-part">
                        {PageData.length > 0 && (
                          <img
                            loading="lazy"
                            src={ImgBaseUrl + PageData[0].field_profile_image}
                            alt="Medipro-2"
                            className="lazyload"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!--with-img-section bg-sec start  here-->  */}
            </main>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export const loadData = (id) => {
  return Promise.all([HomeServices.getTeamMemberData(id)]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData('team-members');
};
