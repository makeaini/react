import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
      </div>
    )
  }
}

export default App
