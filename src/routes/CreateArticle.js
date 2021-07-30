// Imports
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { articleCreate } from '../api/article-auth.js'
import ArticleForm from '../shared/ArticleForm.js'

class CreateArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: {
        title: '',
        content: '',
        authorName: '',
        mainImageUrl: ''
      },
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { article } = this.state
    articleCreate(article, user)
      // .then(() => this.setState({ article: res.data.article }))
      .then(res => this.setState({ createdId: res.data.article.id }))
      .then(msgAlert({
        heading: 'Success!',
        message: 'Your article has been created ',
        variant: 'primary'
      }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(state => {
      // return our state changge
      return {
        article: { ...state.article, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    const { article, createdId } = this.state
    if (createdId) {
      return <Redirect to={`/home/articles/${createdId}`}/>
    }
    return (
      <Fragment>
        <h1>Submit New Article</h1>
        <ArticleForm
          article={article}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

export default CreateArticle
