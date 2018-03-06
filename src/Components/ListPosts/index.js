import React, { Component } from 'react'
import Post from './../Post'

class ListPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.posts.length === 0) {
            const { posts } = nextProps || []
            this.setState({posts: posts})
            this.orderBy('timestamp')
        }
    }

    orderBy = (field) => {
        let { posts } = this.state
        posts = posts.sort((a, b) => {
            if (a[field] < b[field])
                return -1;
            if (a[field] > b[field])
                return 1;
            return 0;
        })

        this.setState(posts)
    }

    change = (event) => {
        const { value } = event.target
        this.orderBy(value)
    }

    render() {

        const { posts } = this.state

        return (
            <div>

                <div>
                    <label>
                        Ordenar por:
                    </label>
                    <select onChange={this.change}>
                        <option value="timestamp">
                            Data
                        </option>
                        <option value="voteScore">
                            Votação
                        </option>
                    </select>
                </div>

                {posts.length > 0 && posts.map(post => (
                    <Post key={post.id}
                        postData={post} />
                ))}

                {posts.length === 0 && (<h3>Nenhum post encontrado</h3>)}

            </div>
        )
    }
}

export default ListPosts