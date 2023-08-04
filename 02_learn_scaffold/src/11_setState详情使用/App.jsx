import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello',
            counter: 0
        }
    }

    onChange() {

        //setState在React的事件处理中是一个异步调用，可以通过callback，回调拿到最新的结果
        // this.setState({
        //     message: 'world'
        // }, () => {
        //     console.log(this.state.message)
        // })
        //setState:回调函数
        //在回调中编写新的state逻辑
        //好处：可以把之前的state,和props传递进来（通过回调参数的形式）,能拿到最新的state
        //     this.setState((state, props) => {
        //     console.log(state)
        //     return {
        //         message: 'world'
        //     }
        // })
        //把需要同步更新的放入flushSync回调当中
        flushSync(() => {
            this.setState({
                message: 'world'
            })

        })
        console.log(this.state.message)
    }
    render() {
        const { message, counter } = this.state
        return (
            <div>
                <h2>{message}</h2><br />
                <h2>{counter}</h2><br />
                <button onClick={() => this.onChange()}>点击</button>
            </div>
        )
    }

}

export default App
