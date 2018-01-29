import React  from 'react'
import Post from './../Post'

const ListPosts = (props) => {
    const { posts } = props || []
    return (
        <div>

            {posts.map(post => (
                <Post key={post.id}
                    author={post.author}
                    title={post.title}
                    voteScore={post.voteScore} />
            ))}

        </div>
    )
}

export default ListPosts