import React, { Component } from 'react';
//import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import axios from 'axios'
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        post_id: null
    }
    componentDidMount(){
        axios.get('/posts')
        .then(response =>{
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Iskra'
                }
            })
           this.setState({posts: updatePosts});
        })
        .catch(error => {
            console.log(error);
        })
    }
    postClickedHandler = (id) => {
        this.setState({post_id: id})
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                        title = {post.title} 
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)}/>
        })
        return (
            <div>
                <header>
                    <nav className="NavBar">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.post_id}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;