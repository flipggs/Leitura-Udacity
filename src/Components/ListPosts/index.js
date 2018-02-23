import React from 'react'
import Post from './../Post'

const ListPosts = (props) => {
    const { posts } = props || []

    return (
        <div>

            {posts.length > 0 && posts.map(post => (
                <Post key={post.id}
                    postData={post} />
            ))}

            {posts.length === 0 && (<h3>Nenhum post encontrado</h3>)}

        </div>
    )
}

export default ListPosts