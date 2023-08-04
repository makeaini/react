import React, { Component } from 'react'
import HomeInfo from './HomeInfo'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  render() {
    const {name,age} = this.props
    return (
      <div>
        home:  {name} ---- {age}
        <HomeInfo/>
        <HomeBanner/>
      </div>
    )
  }
}

export default Home
