import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                
                <a href="/"
                    className={this.state.categoryName === '' ? 'active' : ''}
                >Home </a>
                <a href="/" >New Post </a>
                {categories.map(category => (
                    <a href={`/${category.path}`}
                        className={this.state.categoryName === category.categoryName ? 'active' : ''}
                        key={category.path}>
                        {category.name}
                    </a>
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