import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPosts } from '../../Actions/posts'
import ListPosts from './../../Components/ListPosts/index';

class Category extends Component {

    state = { categoryName: '' }

    componentDidMount() {
        //console.log('componentDidMount', this.state)
        this.setCategoryName(this.props)
    }

    componentWillReceiveProps(nextProps) {
        //console.log('componentWillReceiveProps', this.state);
        this.setCategoryName(nextProps)
    }

    setCategoryName(props) {
        //console.log('setCategoryName')
        const { match = {} } = props
        const { params = {} } = match
        const { category } = params
        if (category !== this.state.categoryName) {
            this.props.getData(category)
            this.setState({ categoryName: category })
        }
    }

    render() {
        const { posts } = this.props

        return (
            <div>
                <h2>{this.state.categoryName}</h2>
                <ListPosts posts={posts} />
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = (dispatch) => ({
    getData: (idCategory) => dispatch(getPosts(idCategory)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Category)