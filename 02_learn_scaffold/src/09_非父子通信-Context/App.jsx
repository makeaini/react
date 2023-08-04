import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'
//创建一个上下文

export class App extends Component {
    constructor() {
        super()
        this.state = {
            info: { name: "book", age: 18 }
        }
    }

    render() {
        const { info } = this.state
        return (
            <div>
                <h2>App</h2>
                {/*
                给Home传递数据
                <Home name="why" age={18} />
                <Home {...this.state.info} /> */}
                {/*** 通过ThemeContext Provider中的value 属性为后代提供数据*/}
                <UserContext.Provider value={{ username: "nickname" }}>
                    <ThemeContext.Provider value={{ color: "red", size: "30" }}>
                        <Home {...info} />
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        )
    }
}

export default App
