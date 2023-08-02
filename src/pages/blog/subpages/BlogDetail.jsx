import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import WebApi from '../../../config/WebApi';
import Loader from '../../../components/Loader';

import { Navigate } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HomeServices from '../../homePage/HomeServices';
import './BlogStyle.css';
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
      isCopied: false,
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

  onCopyText = () => {
    this.setState({
      isCopied: true,
    });
    setTimeout(() => {
      this.setState({
        isCopied: false,
      });
    }, 1000);
  };

  render() {
    var { PageData, ImgBaseUrl, currentURL, isCopied } = this.state;
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
              {/* <!--with-img-section start  here-->  */}
              <section className='midpro-aest'>
                <div className='top-banner'>
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
                <div className='wrapper blog-dtil-page'>
                  <div className='drupal-row drupal-align-items-center'>
                    <div className='blog-author-data'>
                      {/* Local Image */}

                      <div className='author-image-with-name'>
                        <img
                          src={'/blog_author.png'}
                          alt='author'
                          className='local-image-class'
                          style={{ height: '65px' }}
                        />
                        By:
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
                            __html: PageData[0].field_publish_date,
                          }}
                        />
                      )}
                    </div>
                    <div className='drupal-col-12'>
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
                        <CopyToClipboard
                          text={currentURL}
                          onCopy={this.onCopyText}>
                          <div className='copy-area'>
                            {isCopied && (
                              <span className={`copy-feedback ${isCopied ? 'active' : ''}`}>
                                Copied!
                              </span>
                            )}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='30'
                              height='30'
                              fill='currentColor'
                              class='bi bi-clipboard'
                              viewBox='0 0 16 16'>
                              <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
                              <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
                            </svg>
                          </div>
                        </CopyToClipboard>
                      </div>

                      {PageData.length > 0 && (
                        <div
                          className='blog-detail-description'
                          dangerouslySetInnerHTML={{
                            __html: PageData[0].field_description_section,
                          }}
                        />
                      )}
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
