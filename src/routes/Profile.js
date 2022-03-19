import React, { Fragment, Component } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { profile } from './../api/auth.js'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { user } = this.props
    profile(user)
      .then(res => console.log(res))
    // .then(res => this.setState({ articles: res.data.article }))
  }
  render () {
    let articlesJsx
    const { articles, deleted } = this.state
    if (!articles) {
      articlesJsx = 'Loading...'
      return articlesJsx
    }
    if (articles) {
      articlesJsx = articles.map(article => (
        <Link to={`/article/${article._id}`} key={article._id}>
          <h3>{article.title}</h3>
        </Link>
      ))
    }

    return (
      <Fragment>
        {deleted ? <Redirect to="/"/> : articlesJsx}
      </Fragment>
    )
  }
}
export default withRouter(Profile)
