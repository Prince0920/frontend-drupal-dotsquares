import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MetaTags from 'react-meta-tags';

export default class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleCallback = value => {
    if (value != this.state.loading) {
      this.setState({ loading: value });
    }
  };

  render() {
    return (
      <div
        id='page'
        className='site'>
        <MetaTags>
          <title>Coming Soon - Dotsquares</title>
          <meta
            name='description'
            content='Comming Soon - Dotsquares.'
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
            content='Comming Soon - Dotsquares'
          />
          <meta
            property='og:description'
            content='Comming Soon - Dotsquares'
          />
          <meta
            property='og:url'
            content='https://drupal.dotsquares.com/case-studies/'
          />
          <meta
            property='og:site_name'
            content='Comming Soon - Dotsquares'
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

        <div style={styles.container}>
          {/* Centering the content */}
          <h1 style={styles.heading}>Coming Soon</h1>
        </div>

        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  heading: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
};
