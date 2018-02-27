import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.css'
import { getCategories } from '../../Actions/categories'


class Header extends Component {

    state = {
        categoryName: ''
    }

    getCategoryName = () => {
        const { match = {} } = this.props
        const { params = {} } = match
        return params.category
    }

    componentDidMount() {
        this.props.fetchData();
        
        const categoryName = this.getCategoryName()

        if (categoryName)
            this.setState({ categoryName })
    }

    render() {
        const { categories = {} } = this.props
        //console.log('render categories', JSON.stringify(categories));

        return (
            <header>
                
                <Link to="/"
                    className={this.state.categoryName === '' ? 'active' : ''}
                >Home </Link>
                <Link to="/new" >Cadastrar Post </Link>
                {categories.map(category => (
                    <Link to={`/${category.path}`}
                        className={this.state.categoryName === category.categoryName ? 'active' : ''}
                        key={category.path}>
                        {category.name}
                    </Link>
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
            return dispatch(getCategories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)