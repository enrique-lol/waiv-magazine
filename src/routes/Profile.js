import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { profile } from './../api/auth.js'
// import { savedArticles } from './../api/article-auth.js'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      articles: null
    }
  }
  componentDidMount () {
    const { user } = this.props
    profile(user)
      // .then(res => console.log(res.data.user.savedArtIds))
      .then(res => this.setState({ user: res.data.user }))
  }
  render () {
    let profileJsx
    const { user, articles } = this.state
    if (!articles) {
      profileJsx = 'Loading...'
      return profileJsx
    }
    if (user) {
      profileJsx = (
        <Fragment>
          <h3>hello</h3>
        </Fragment>
      )
    }

    return profileJsx
  }
}
export default withRouter(Profile)
