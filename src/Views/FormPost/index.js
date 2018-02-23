import React from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import uuidv1 from 'uuid/v1'

import './formPost.css'

import { insertNewPost } from '../../Actions/posts'

const FormPost = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        const post = {
            id: uuidv1(),
            timestamp: Date.now(),
            ...values
        }
        
        console.log('form', post);

        props.insertPost(post)
    }

    const { categories } = props

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4> Post </h4>
            <input type="text" placeholder="Título" id="title" name="title" />
            <input type="text" placeholder="Autor" id="author" name="author" />
            <select id="category" name="category">
                {categories.map(category => (
                    <option key={category.path} value={category.path}>{category.name}</option>
                ))}
            </select>
            <textarea id="body" name="body" placeholder="Conteúdo" />
            <input type="submit" value="Salvar" />
        </form>

    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
    insertPost: (post) => dispatch(insertNewPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPost)