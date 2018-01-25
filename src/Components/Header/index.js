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
        console.log('render categories', categories);

        return (
            <header>
                <a href="/" >Home </a>
                <a href="/" >New Post </a>
               
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(categoriesFetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)