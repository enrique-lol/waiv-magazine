// ////////////////////////////////////////////////////////////////////////////
import React, { Fragment, Component } from 'react'
import Card from 'react-bootstrap/Card'
// import { withRouter } from 'react-router-dom'

class FutureFeature extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  componentDidMount () {
  }

  render () {
    return (
      <Fragment>
        <Card className='uc-card' bg='warning' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Under Construction</Card.Title>
            <Card.Text>
          This feature is in the process of being developed. Please visit at a later time. Thank You!
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
}

export default FutureFeature
