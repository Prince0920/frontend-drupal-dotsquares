import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import WebApi from '../../../config/WebApi';
import Loader from '../../../components/Loader';

import { Navigate } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import HomeServices from '../../homePage/HomeServices';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      PageData: props.apiData ? props.apiData[0] : [],
      ImgBaseUrl: 'https://drupal2.24livehost.com',
      loading: false,
      currentURL: '',
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
        currentURL: window.location.href,
      });
    }
  }

  handleCallback = value => {
    if (value !== this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    var { PageData, ImgBaseUrl, currentURL } = this.state;
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
                <h1>{PageData[0]?.field_title_section}</h1>
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
              <section className='with-img-section midpro-aest'>
                <div className='wrapper'>
                  <div className='drupal-row drupal-align-items-center'>
                    <div className='drupal-col-6 content-part-left'>
                      {PageData.length > 0 && (
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_title_section,
                          }}
                        />
                      )}
                      <div className='social-share-btn'>
                        <FacebookShareButton url={currentURL}>
                          <FacebookIcon />
                        </FacebookShareButton>
                        <LinkedinShareButton url={currentURL}>
                          <LinkedinIcon />
                        </LinkedinShareButton>
                        <TwitterShareButton url={currentURL}>
                          <TwitterIcon />
                        </TwitterShareButton>
                      </div>
                      <div className='blog-author-data'>
                        {/* Local Image */}
                        {PageData.length > 0 && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: PageData[0].field_publish_date,
                            }}
                          />
                        )}
                        <img
                          src={'/blog_author.png'}
                          alt='author'
                          className='local-image-class'
                          style={{ height: '65px' }}
                        />
                        {PageData.length > 0 && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: PageData[0].field_author_name,
                            }}
                          />
                        )}
                      </div>
                      {PageData.length > 0 && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_description_section,
                          }}
                        />
                      )}
                    </div>
                    <div className='drupal-col-6'>
                      <div className='img-part'>
                        {PageData.length > 0 && (
                          <img
                            loading='lazy'
                            src={ImgBaseUrl + PageData[0].field_media_image}
                            alt='Medipro-2'
                            className='lazyload'
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

export const loadData = id => {
  return Promise.all([HomeServices.getBlogData(id)]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData('blog');
};
