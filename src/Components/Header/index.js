import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from '../../Actions/categories'

import './index.css'

const Header = (props) => {
    const { categories } = props

    if (categories.length === 0)
        props.getCategories()

    return (
        <header>
            <nav>
                <ul className="main-menu">
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/new" >Cadastrar Post </Link>
                    </li>
                    {categories.map(category => (
                        <li key={category.path}>
                            <Link to={`/${category.path}`} >{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>


        </header>
    )
}


const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)