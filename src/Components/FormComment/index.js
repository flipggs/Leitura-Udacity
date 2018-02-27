import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import uuidv1 from 'uuid/v1'
import { If, Then } from 'react-if'

import './formComment.css'

import { insertNewComment, getCommentById, fecthUpdateComment } from '../../Actions/comments'

class FormComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            isUpdate: false,
            author: '',
            body: ''
        }
    }

    componentDidMount() {
        const { match = {} } = this.props
        const { params = {} } = match

        if (params.comment_id) {
            this.props.getData(params.comment_id)
            this.setState({
                isUpdate: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isUpdate) {
            const { comment } = nextProps

            this.setState({
                body: comment.body,
                id: comment.id
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (!this.state.isUpdate) {
            const comment = {
                parentId: this.props.postId,
                id: uuidv1(),
                timestamp: Date.now,
                ...values
            }

            this.props.insertComment(comment)
        }
        else {
            this.props.updateComment(this.state.id, {
                body: values.body,
                timestamp: Date.now
            })
        }

    }

    handleTextChange = (event) => {
        const { name } = event.target
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        const comment = this.state
        return (
            <form className="form-comment" onSubmit={this.handleSubmit} >
                <span> Comentário </span>
                <If condition={!this.state.isUpdate}>
                    <Then>
                        <input type="text" placeholder="Autor" id="author" name="author" value={comment.author || ''} onChange={this.handleTextChange} />
                    </Then>
                </If>
                <textarea id="body" name="body" placeholder="Conteúdo" value={comment.body || ''} onChange={this.handleTextChange} />
                <input type="submit" value="Salvar" />
            </form>
        )
    }
}

const mapStateToProps = ({ comment }) => ({ comment })

const mapDispatchToProps = (dispatch) => ({
    getData: (id) => dispatch(getCommentById(id)),
    insertComment: (comment) => dispatch(insertNewComment(comment)),
    updateComment: (id, options) => dispatch(fecthUpdateComment(id, options))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormComment)
