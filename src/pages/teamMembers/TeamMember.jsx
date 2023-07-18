import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import TeamMemberBanner from './elements/TeamMemberBanner';
import HomeServices from '../homePage/HomeServices';
import TeamMembersBlock from './elements/TeamMembersBlock';

export default class TeamMember extends Component {
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
    let metaData = {};
    if(typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.metaData){
      metaData = window.__ROUTE_DATA__.metaData;
    }
    console.log("Team metaData --------------", metaData);
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
              <TeamMemberBanner />
              <TeamMembersBlock/>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export const loadData = () => {
  return Promise.all([
    HomeServices.getAllTeamMembers()
  ]);
};

export const getMetaData = () => {
  return HomeServices.getMetaData('team-members');
};
