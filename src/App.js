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
    ]
  }
  componentDidMount() {
    //https://api.github.com/users/sooof
    axios.get('https://api.github.com/users/sooof')
        .then( resp=> {
            console.log(resp.data);
            this.setState({
                ...this.state,
                User: resp.data
            });
        }).catch( err=>{
            console.log(err);
        });
        axios.get(`https://api.github.com/users/sooof/followers`)
        .then(resp=> {
            console.log(resp);
            this.setState({
                ...this.state,
                Followers: resp.data
            })
        })
        .catch(err=> {
            console.log(err);
        })
  }
  
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
