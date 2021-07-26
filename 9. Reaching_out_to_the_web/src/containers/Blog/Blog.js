import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios'
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        post_id: null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Iskra'
                }
            })
           this.setState({posts: updatePosts});
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