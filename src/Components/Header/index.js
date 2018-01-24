import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
import { getCategories } from '../../Actions/categories'


class Header extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.props.fetchData();
        console.log('this.props', this.props)
    }

    render() {
        
        return (
            <header className="header">
                <a href="/" >Home </a>
                <a href="/" >New Post </a>
                {this.state.categories.map(categorie => (
                    <a key={categorie.path} href={categorie.path} >{categorie.name} </a>
                ))}
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => {
        console.log('fetch')
        return dispatch(getCategories())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)