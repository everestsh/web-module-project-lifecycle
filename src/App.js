import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import "./App.css";

class App extends React.Component {
  state = {
    User: {},
    Followers:[
      {
        "login": "beatlesm",
        "id": 7886233,
        "node_id": "MDQ6VXNlcjc4ODYyMzM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/7886233?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/beatlesm",
        "html_url": "https://github.com/beatlesm",
        "followers_url": "https://api.github.com/users/beatlesm/followers",
        "following_url": "https://api.github.com/users/beatlesm/following{/other_user}",
        "gists_url": "https://api.github.com/users/beatlesm/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/beatlesm/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/beatlesm/subscriptions",
        "organizations_url": "https://api.github.com/users/beatlesm/orgs",
        "repos_url": "https://api.github.com/users/beatlesm/repos",
        "events_url": "https://api.github.com/users/beatlesm/events{/privacy}",
        "received_events_url": "https://api.github.com/users/beatlesm/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "fsophira",
        "id": 27023676,
        "node_id": "MDQ6VXNlcjI3MDIzNjc2",
        "avatar_url": "https://avatars.githubusercontent.com/u/27023676?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/fsophira",
        "html_url": "https://github.com/fsophira",
        "followers_url": "https://api.github.com/users/fsophira/followers",
        "following_url": "https://api.github.com/users/fsophira/following{/other_user}",
        "gists_url": "https://api.github.com/users/fsophira/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/fsophira/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/fsophira/subscriptions",
        "organizations_url": "https://api.github.com/users/fsophira/orgs",
        "repos_url": "https://api.github.com/users/fsophira/repos",
        "events_url": "https://api.github.com/users/fsophira/events{/privacy}",
        "received_events_url": "https://api.github.com/users/fsophira/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "weijie76",
        "id": 27300386,
        "node_id": "MDQ6VXNlcjI3MzAwMzg2",
        "avatar_url": "https://avatars.githubusercontent.com/u/27300386?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/weijie76",
        "html_url": "https://github.com/weijie76",
        "followers_url": "https://api.github.com/users/weijie76/followers",
        "following_url": "https://api.github.com/users/weijie76/following{/other_user}",
        "gists_url": "https://api.github.com/users/weijie76/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/weijie76/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/weijie76/subscriptions",
        "organizations_url": "https://api.github.com/users/weijie76/orgs",
        "repos_url": "https://api.github.com/users/weijie76/repos",
        "events_url": "https://api.github.com/users/weijie76/events{/privacy}",
        "received_events_url": "https://api.github.com/users/weijie76/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "summeru",
        "id": 29171726,
        "node_id": "MDQ6VXNlcjI5MTcxNzI2",
        "avatar_url": "https://avatars.githubusercontent.com/u/29171726?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/summeru",
        "html_url": "https://github.com/summeru",
        "followers_url": "https://api.github.com/users/summeru/followers",
        "following_url": "https://api.github.com/users/summeru/following{/other_user}",
        "gists_url": "https://api.github.com/users/summeru/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/summeru/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/summeru/subscriptions",
        "organizations_url": "https://api.github.com/users/summeru/orgs",
        "repos_url": "https://api.github.com/users/summeru/repos",
        "events_url": "https://api.github.com/users/summeru/events{/privacy}",
        "received_events_url": "https://api.github.com/users/summeru/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "FftyShadesofCode",
        "id": 31264591,
        "node_id": "MDQ6VXNlcjMxMjY0NTkx",
        "avatar_url": "https://avatars.githubusercontent.com/u/31264591?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/FftyShadesofCode",
        "html_url": "https://github.com/FftyShadesofCode",
        "followers_url": "https://api.github.com/users/FftyShadesofCode/followers",
        "following_url": "https://api.github.com/users/FftyShadesofCode/following{/other_user}",
        "gists_url": "https://api.github.com/users/FftyShadesofCode/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/FftyShadesofCode/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/FftyShadesofCode/subscriptions",
        "organizations_url": "https://api.github.com/users/FftyShadesofCode/orgs",
        "repos_url": "https://api.github.com/users/FftyShadesofCode/repos",
        "events_url": "https://api.github.com/users/FftyShadesofCode/events{/privacy}",
        "received_events_url": "https://api.github.com/users/FftyShadesofCode/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "ryansnorek",
        "id": 32182282,
        "node_id": "MDQ6VXNlcjMyMTgyMjgy",
        "avatar_url": "https://avatars.githubusercontent.com/u/32182282?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ryansnorek",
        "html_url": "https://github.com/ryansnorek",
        "followers_url": "https://api.github.com/users/ryansnorek/followers",
        "following_url": "https://api.github.com/users/ryansnorek/following{/other_user}",
        "gists_url": "https://api.github.com/users/ryansnorek/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ryansnorek/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ryansnorek/subscriptions",
        "organizations_url": "https://api.github.com/users/ryansnorek/orgs",
        "repos_url": "https://api.github.com/users/ryansnorek/repos",
        "events_url": "https://api.github.com/users/ryansnorek/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ryansnorek/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "Kseniyapl",
        "id": 43353550,
        "node_id": "MDQ6VXNlcjQzMzUzNTUw",
        "avatar_url": "https://avatars.githubusercontent.com/u/43353550?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Kseniyapl",
        "html_url": "https://github.com/Kseniyapl",
        "followers_url": "https://api.github.com/users/Kseniyapl/followers",
        "following_url": "https://api.github.com/users/Kseniyapl/following{/other_user}",
        "gists_url": "https://api.github.com/users/Kseniyapl/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Kseniyapl/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Kseniyapl/subscriptions",
        "organizations_url": "https://api.github.com/users/Kseniyapl/orgs",
        "repos_url": "https://api.github.com/users/Kseniyapl/repos",
        "events_url": "https://api.github.com/users/Kseniyapl/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Kseniyapl/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "Cheyenneb96",
        "id": 75545636,
        "node_id": "MDQ6VXNlcjc1NTQ1NjM2",
        "avatar_url": "https://avatars.githubusercontent.com/u/75545636?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Cheyenneb96",
        "html_url": "https://github.com/Cheyenneb96",
        "followers_url": "https://api.github.com/users/Cheyenneb96/followers",
        "following_url": "https://api.github.com/users/Cheyenneb96/following{/other_user}",
        "gists_url": "https://api.github.com/users/Cheyenneb96/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Cheyenneb96/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Cheyenneb96/subscriptions",
        "organizations_url": "https://api.github.com/users/Cheyenneb96/orgs",
        "repos_url": "https://api.github.com/users/Cheyenneb96/repos",
        "events_url": "https://api.github.com/users/Cheyenneb96/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Cheyenneb96/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "bugsbrog",
        "id": 85898207,
        "node_id": "MDQ6VXNlcjg1ODk4MjA3",
        "avatar_url": "https://avatars.githubusercontent.com/u/85898207?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bugsbrog",
        "html_url": "https://github.com/bugsbrog",
        "followers_url": "https://api.github.com/users/bugsbrog/followers",
        "following_url": "https://api.github.com/users/bugsbrog/following{/other_user}",
        "gists_url": "https://api.github.com/users/bugsbrog/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bugsbrog/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bugsbrog/subscriptions",
        "organizations_url": "https://api.github.com/users/bugsbrog/orgs",
        "repos_url": "https://api.github.com/users/bugsbrog/repos",
        "events_url": "https://api.github.com/users/bugsbrog/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bugsbrog/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "BryceSlade",
        "id": 89153584,
        "node_id": "MDQ6VXNlcjg5MTUzNTg0",
        "avatar_url": "https://avatars.githubusercontent.com/u/89153584?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/BryceSlade",
        "html_url": "https://github.com/BryceSlade",
        "followers_url": "https://api.github.com/users/BryceSlade/followers",
        "following_url": "https://api.github.com/users/BryceSlade/following{/other_user}",
        "gists_url": "https://api.github.com/users/BryceSlade/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/BryceSlade/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/BryceSlade/subscriptions",
        "organizations_url": "https://api.github.com/users/BryceSlade/orgs",
        "repos_url": "https://api.github.com/users/BryceSlade/repos",
        "events_url": "https://api.github.com/users/BryceSlade/events{/privacy}",
        "received_events_url": "https://api.github.com/users/BryceSlade/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "tinaxgao",
        "id": 89364961,
        "node_id": "MDQ6VXNlcjg5MzY0OTYx",
        "avatar_url": "https://avatars.githubusercontent.com/u/89364961?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tinaxgao",
        "html_url": "https://github.com/tinaxgao",
        "followers_url": "https://api.github.com/users/tinaxgao/followers",
        "following_url": "https://api.github.com/users/tinaxgao/following{/other_user}",
        "gists_url": "https://api.github.com/users/tinaxgao/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tinaxgao/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tinaxgao/subscriptions",
        "organizations_url": "https://api.github.com/users/tinaxgao/orgs",
        "repos_url": "https://api.github.com/users/tinaxgao/repos",
        "events_url": "https://api.github.com/users/tinaxgao/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tinaxgao/received_events",
        "type": "User",
        "site_admin": false
      }
    ]
  }
  // componentDidMount() {
  //   //https://api.github.com/users/sooof
  //   axios.get('https://api.github.com/users/sooof')
  //       .then( resp=> {
  //           console.log(resp.data);
  //           this.setState({
  //               ...this.state,
  //               User: resp.data
  //           });
  //       }).catch( err=>{
  //           console.log(err);
  //       });
  // }
  
  // componentDidUpdate(prevProps, prevState) {
  //   axios.get(`https://api.github.com/users/sooof/followers`)
  //   .then(resp=> {
  //       console.log(resp);
  //       // this.setState({
  //       //     ...this.state,
  //       //     Follower: resp.data
  //       // })
  //   })
  //   .catch(err=> {
  //       console.log(err);
  //   })
  // }


  render() {
    console.log("App.js", this.state.User);
    console.log("App.js", this.state.Followers);
    return(<div className='App'>
      {/* <h1>Github Card</h1> */}

      <nav className='App-header'>
          <h1>GITHUB INFO</h1>
          
          <div className='App-link'>
            <Link to='/'>Github Handle</Link>
            <Link to='/search'>Search</Link>
            
          </div>
      </nav>
    
      <Switch>
        <Route exact path='/'>
          <User user={this.state.User}/>
          <FollowerList followers={this.state.Followers}/>
        </Route>
      </Switch>
    </div>);
  }
}

export default App;
