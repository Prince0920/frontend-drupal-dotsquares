import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import MetaTags from 'react-meta-tags';
import HomeServices from '../homePage/HomeServices';
import BlogList from './elements/BlogList';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scroll: false,
    };
  }

  handleCallback = value => {
    if (value != this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    let metaData = {};
    if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.metaData) {
      metaData = window.__ROUTE_DATA__.metaData;
    }

    return (
      <div
        id='page'
        className='site'>
        <MetaTags>
          <title>Featured Case Studies - Dotsquares | Drupal Development Company</title>
          <meta
            name='description'
            content='Dotsquares case studies of real companies working with Drupal CMS. Check out the success stories of a Web Development company that has been operating since 2002.'
          />

          <meta
            property='og:locale'
            content='en_US'
          />
          <meta
            property='og:type'
            content='article'
          />
          <meta
            property='og:title'
            content='Featured Case Studies - Dotsquares | Drupal Development Company'
          />
          <meta
            property='og:description'
            content='Dotsquares case studies of real companies working with Drupal CMS. Check out the success stories of a Web Development company that has been operating since 2002.'
          />
          <meta
            property='og:url'
            content='https://drupal.dotsquares.com/case-studies/'
          />
          <meta
            property='og:site_name'
            content='Drupal Dotsquares'
          />
          <meta
            property='article:modified_time'
            content='2021-08-04T10:53:42+00:00'
          />
          <meta
            name='twitter:card'
            content='summary_large_image'
          />
        </MetaTags>
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
              <div className='header-title'>
                <h1>Blogs</h1>
              </div>

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
              <BlogList />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export const loadData = () => {
  return Promise.all([HomeServices.getBlogs()]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData('blogs');
};
