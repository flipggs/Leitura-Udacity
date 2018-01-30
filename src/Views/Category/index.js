import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPosts } from '../../Actions/posts'
import ListPosts from './../../Components/ListPosts/index';

class Category extends Component {

    state = {
        categoryName: ''
    }

    getCategoryName = () => {
        const { match = {} } = this.props
        const { params = {} } = match
        return params.category
    }

    componentDidMount() {
        const categoryName = this.getCategoryName()
        this.props.getData(categoryName)

        this.setState({ categoryName })
    }

    render() {

        const { posts = [] } = this.props
        console.log('posts', posts);

        return (
            <div>
                <h2>{this.state.categoryName}</h2>
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

const mapDispatchToProps = (dispatch) => ({
    getData: (idCategory) => dispatch(getPosts(idCategory)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Category)