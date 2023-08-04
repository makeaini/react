import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'
export class HomeInfo extends Component {
  render() {
    const {color,size} = this.context
    return (
      <div>
        homeInfo
        <br />
        {color} <br />
        {size}
        <UserContext.Consumer>
            {
                value=>{
                    return (<h2>{value.username}</h2>)
                }
            }
        </UserContext.Consumer>
      </div>
    )
  }
}
//设置contextType为某一个Content
HomeInfo.contextType = ThemeContext 

export default HomeInfo
