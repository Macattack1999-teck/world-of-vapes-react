import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import GlassList from './GlassList'

class GlassDashboard extends Component {
  render() {
    const { glass } = this.props
    return (
      <div>
        <GlassList glasses={glass}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    glass: state.firestore.ordered.glass
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'glass'}
  ])
)(GlassDashboard)