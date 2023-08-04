import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: 'aaa'
        }
    }
    inputChange(e) {
        this.setState({
            username: e.target.value
        })

    }
    render() {
        const {username} = this.state
        return (
            <div>
                {
                    /****受控组件 */
                }
                <input type="text" value={username} onChange={(e) => this.inputChange(e)} />
                {
                    /****非受控组件 */
                }
                <input type="text" />
                <h2>{username}</h2>
            </div>
        )
    }
}

export default App
