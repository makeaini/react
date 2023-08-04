import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }
    onUserSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
    }
    onUserChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        const { username } = this.state
        return (
            <div>
                <form onSubmit={(e) => this.onUserSubmit(e)}>
                    <label htmlFor="username">用户名 :
                        <input
                            type="text"
                            value={username}
                            name="username"
                            onChange={(e) => this.onUserChange(e)} />
                    </label>
                    <button type='submit'>提交</button>
                </form>
            </div>
        )
    }
}

export default App
