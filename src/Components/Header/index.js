import React, { Component } from 'react'
import './index.css'
import { get } from '../../Services/ReadbleAPI'

class Header extends Component {
    state = {
        categories: []
    }
    componentDidMount() {

        get("/categories").then(res => {
            this.setState({ categories: res.data.categories })
        })
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

export default Header