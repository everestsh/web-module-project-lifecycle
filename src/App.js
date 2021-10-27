import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';
import User from './components/User';
import "./App.css";

class App extends React.Component {

  state = {
    dogImages: [],
    input: ""
}
// componentDidMount() {
//     axios.get('https://dog.ceo/api/breed/husky/images')
//         .then( resp=> {
//             // console.log(resp.data);
//             //console.log(resp.data.message  );
//             this.setState({
//                 ...this.state,
//                 dogImages: resp.data.message
//             });
//         }).catch( err=>{
//             console.log(err);
//         });
// }


  render() {
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
          <User />
        </Route>
      </Switch>
    </div>);
  }
}

export default App;
