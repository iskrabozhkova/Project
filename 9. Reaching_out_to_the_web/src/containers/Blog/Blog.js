import React, { Component } from 'react';
//import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
 import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import {Route, NavLink, Switch} from 'react-router-dom'

class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className="NavBar">
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to={{pathname: "/new-post"}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/* <Route path="/" exact render={() => <h1>Home</h1>}/>*/}
               <Switch>
                    <Route path="/" exact component={Posts}></Route>
                    <Route path="/new-post" exact component={NewPost}></Route>
                    <Route path="/:id" exact component={FullPost}></Route>
               </Switch>
            </div>
        );
    }
}

export default Blog;