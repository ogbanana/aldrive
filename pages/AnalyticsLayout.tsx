import React, { Component } from 'react'
import { initGA, logPageView } from '../utils/analytics'

class AnalyticsLayout extends Component {
  componentDidMount() {
    if (!window['GA_INITIALIZED']) {
      initGA()
      window['GA_INITIALIZED'] = true
    }
    logPageView()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default AnalyticsLayout
