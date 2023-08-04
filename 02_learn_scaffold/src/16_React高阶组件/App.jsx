import React, { PureComponent } from 'react'



function Home(props){
 return <h1>Home</h1>
}
function Proifle(props){
 return <h2>Proifle</h2>
}
function HelloFriend(props){
    return <h3>Hello Friend1</h3>
}
   
export class App extends PureComponent {
  render() {
    return (
      <div>
            <Home/>
            <Proifle/>
            <HelloFriend/>
      </div>
    )
  }
}

export default App
