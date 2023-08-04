import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: 0,
            height: 0
        }
    }
    componentDidMount() {
        eventBus.on("pre", this.bannerPrevClick, this)
    }

    bannerPrevClick(name, age, height) {
        this.setState({
            name: name,
            age: age,
            height: height
        });
    }
    componentWillUnmount() {
        eventBus.off("pre", this.bannerPrevClick)
    }
    render() {
        const { name, age, height } = this.state
        return (
            <div>
                <h2>App:{name}---{age}---{height}</h2>
                <Home />
            </div>
        )
    }
}

export default App
