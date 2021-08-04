import React,  {Component} from 'react'
import Post from '../../../components/Post/Post'
import './Posts.css'
import axios from 'axios'
class Posts extends Component {

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
        .catch(error => {console.log(error);})
    }
    postClickedHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
    }
    render(){
        const posts = this.state.posts.map(post => {
            return <Post 
                        title = {post.title} 
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)}/>
        });
        return (
        <section className="Posts">
            {posts}
        </section>
        )
    }
}

export default Posts;