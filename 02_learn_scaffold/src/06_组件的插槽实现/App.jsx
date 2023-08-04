import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'

export class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <button>按钮</button>
                    <h2>我是标题</h2>
                    <i>文字</i>
                </NavBar>
                <NavBar2 leftSlot={<button>按钮1</button>}
                    centerSlot={<h2>哈哈</h2>}
                    rightSlot={<i>哈2</i>}
                />
            </div>
        )
    }
}

export default App
