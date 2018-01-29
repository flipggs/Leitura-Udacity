import React, { Component } from 'react';
import Post from './../../Components/Post/index';

class Category extends Component {

    state = {
        categoryName: ''
    }

    componentDidMount() {
        this.setState({ categoryName: this.getCategoryName() })
    }

    getCategoryName = () => {
        const { match = {} } = this.props
        const { params = {} } = match
        return params.category
    }

    render() {

        return (
            <div>
                <h2>{this.state.categoryName}</h2>
                {/* {posts.map(post => (
                    <Post key={post.id}
                        author={post.author}
                        title={post.title}
                        voteScore={post.voteScore} />
                ))} */}
            </div>
        )
    }
}

export default Category