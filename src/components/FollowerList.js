import React from 'react';
import "./User.css";

class FollowerList extends React.Component{

    render() {
        const { user } = this.props;
        return(
            <div className='user-container '>
                <div className="user-img">
                    <img src='https://avatars.githubusercontent.com/u/7962407?v=4'/>
                </div>
                <div className='user-text'>
                    <h2>{user.name}</h2>
                    <p>({user.bio})</p>
                    <h3>TOTAL REPOS: {user.public_repos}</h3>
                    <h3>TOTAL FOLLOWERS: {user.followers}</h3>
                </div>

            </div>

        );
    }
}

export default FollowerList;