import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../Views/Home'
import NotFound from '../../Views/NotFound'
import Category from '../../Views/Category'
import FormPost from '../../Views/FormPost'
import FormComment from '../../Components/FormComment'
import Post from '../../Components/Post'

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route path="/edit-post/:post_id" component={FormPost} />
                <Route path="/edit-comment/:comment_id" component={FormComment} />
                <Route path="/new" component={FormPost} />
                <Route path="/:category/:post_id" component={Post} />
                <Route path="/:category" component={Category} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}

export default Main
