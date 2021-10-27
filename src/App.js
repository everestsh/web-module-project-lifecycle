import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';
import User from './components/User';
import "./App.css";

class App extends React.Component {
  state = {
    User: {},
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
  }

  


  render() {
    console.log("App.js", this.state.User);
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
          {/* <Follower user={this.state.User}/> */}
        </Route>
      </Switch>
    </div>);
  }
}

export default App;
