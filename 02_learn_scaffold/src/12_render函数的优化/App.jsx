import React, { PureComponent } from 'react'
import Recommend from './Recommend'
import Home from './Home'
import Profile from './Profile'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            message: 'Hello World',
            counter: 0
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     //性能优化，自己对数据进行比较
    //     if (this.state.message !== nextState.message
    //         || this.state.counter !== nextState.counter) {
    //         return true
    //     }
    //     return false
    // }
    changeText() {
        this.setState({ message: "Hello World1" })
    }
    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        console.log("app render")
        const { message, counter } = this.state
        return (
            <div>
                <h2>App- {message} - {counter}</h2>
                <button onClick={(e) => this.changeText()}>修改</button>
                <button onClick={(e) => this.increment()}>修改</button>
                <Home message={message} />
                <Recommend counter={counter} />
                <Profile message={message}/>
            </div>
        )
    }
}

export default App
