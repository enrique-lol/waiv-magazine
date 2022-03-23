import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { profile } from './../api/auth.js'
import SavedArticles from './../routes/SavedArticles.js'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      array: null
    }
  }
  componentDidMount () {
    const { user } = this.props
    profile(user)
      .then(res => this.setState({ user: res.data.user.email, array: res.data.user.savedArtIds }))
  }
  render () {
    // retreiveArticles(this.state.user.savedArtIds)
    //   .then(res => this.setState({ articles: res.data.articles }))
    const { user, array } = this.state
    const dataJsx = (
      <p>Hello {user}</p>
    )

    return (
      <Fragment>
        {dataJsx}
        <SavedArticles array={array}/>
      </Fragment>
    )
  }
}
export default withRouter(Profile)
