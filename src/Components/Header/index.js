import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
import { categoriesFetchData } from '../../Actions/categories'


class Header extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { categories = {} } = this.props
        console.log('render categories', JSON.stringify(categories));

        return (
            <header>
                <a href="/" >Home </a>
                <a href="/" >New Post </a>
                {categories.map(category => (
                    <a href={category.path} key={category.path}> {category.name} </a>
                ))}
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            return dispatch(categoriesFetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)