import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import apiUrl from '../apiConfig'
// import axios from 'axios'
import ArticleForm from '../shared/ArticleForm.js'
import { showArticle, articleUpdate } from './../api/article-auth.js'

class UpdateArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: null,
      updated: false
    }
  }
  async componentDidMount () {
    // try {
    //   const res = await axios(`${apiUrl}/articles/${this.props.match.params.id}`)
    //   this.setState({ article: res.data.article })
    // } catch (err) {
    // }
    const { user, match, msgAlert } = this.props
    // make a request for a single bathroom
    showArticle(match.params.id, user)
      .then(res => this.setState({ article: res.data.article }))
      .catch(error => {
        msgAlert({
          heading: 'Try Again',
          message: 'ERROR: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, match, msgAlert } = this.props
    const { article } = this.state
    articleUpdate(match.params.id, article, user)
      .then(() => this.setState({ updated: true }))
      .then(msgAlert({
        heading: 'Success!',
        message: 'Your article has been updated ',
        variant: 'primary'
      }))
      .catch(console.error)
  }
  handleChange = (event) => {
    event.persist()
    this.setState(currState => {
      const updatedField = {
        [event.target.name]: event.target.value
      }
      const newArticle = { ...currState.article, ...updatedField }
      return { article: newArticle }
    })
  }
  render () {
    const { article, updated } = this.state
    if (!article) {
      return <h2>Make an Article!</h2>
    } if (updated) {
      return <Fragment><Redirect to={`/home/articles/${this.props.match.params.id}`}/></Fragment>
    }
    return (
      <Fragment>
        <ArticleForm
          article={article}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

export default withRouter(UpdateArticle)
