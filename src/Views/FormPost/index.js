import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import uuidv1 from 'uuid/v1'
import { If, Then } from 'react-if'
import { getPostById } from '../../Actions/posts'

import './formPost.css'

import { insertNewPost, fecthUpdatePost } from '../../Actions/posts'

class FormPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isUpdate: false,
            postId: '',
            title: '',
            author: '',
            category: '',
            body: ''
        }
    }

    componentDidMount() {

        const { match = {} } = this.props
        const { params = {} } = match
        if (params.post_id) {
            this.props.getData(params.post_id)
            this.setState({
                isUpdate: true
            })
        }

    }

    componentWillReceiveProps(nextProps) {

        if (this.state.isUpdate) {
            const { post } = nextProps

            this.setState({
                postId: post.id,
                title: post.title,
                author: post.author,
                category: post.category,
                body: post.body
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (!this.state.isUpdate) {
            const post = {
                id: uuidv1(),
                timestamp: Date.now(),
                ...values
            }

            this.props.insertPost(post)
        }
        else {
            this.props.updatePost(values, this.state.postId)
        }

    }

    handleTextChange = (event) => {
        const { name } = event.target
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        const { categories } = this.props
        const post = this.state || {}

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h4> Post </h4>
                <input type="text" placeholder="Título" id="title" name="title" value={post.title || ''} onChange={this.handleTextChange} />
                <If condition={!this.state.isUpdate}>
                    <Then>
                        <div>
                            <div>
                                <input type="text" placeholder="Autor" id="author" name="author" value={post.author || ''} onChange={this.handleTextChange} />
                            </div>

                            <div>
                                Categoria
                                <select id="category" name="category" value={post.category || ''} onChange={this.handleTextChange}>
                                    {categories.map(category => (
                                        <option key={category.path} value={category.path}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Then>
                </If>
                <textarea id="body" name="body" placeholder="Conteúdo" value={post.body} onChange={this.handleTextChange} />
                <input type="submit" value="Salvar" />
            </form>

        )
    }
}

const mapStateToProps = ({ categories, post }) => ({ categories, post })

const mapDispatchToProps = (dispatch) => ({
    insertPost: (post) => dispatch(insertNewPost(post)),
    updatePost: (post, postId) => dispatch(fecthUpdatePost(post, postId)),
    getData: (postId) => dispatch(getPostById(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPost)