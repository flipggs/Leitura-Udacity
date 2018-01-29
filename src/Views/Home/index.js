import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../Actions/posts'
import ListPosts from './../../Components/ListPosts/index';

class Home extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts = [] } = this.props

        return (
            <div>
                <ListPosts posts={posts} />
                
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
        getPosts: () => {
            return dispatch(getPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)