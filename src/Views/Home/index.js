import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postsFetchData } from '../../Actions/posts'

class Home extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { posts = [] } = this.props
        console.log('render posts', JSON.stringify(posts));

        return (
            <div>
                {posts.map(post => (
                    <h1 key={post.id}> {post.title} </h1>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            return dispatch(postsFetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)