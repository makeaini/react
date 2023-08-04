import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    onUserSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
    }
    onHandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { username,password } = this.state
        return (
            <div>
                <form onSubmit={(e) => this.onUserSubmit(e)}>
                    <label htmlFor="username">用户名 :
                        <input
                            type="text"
                            value={username}
                            name="username"
                            onChange={(e) => this.onHandleChange(e)} />
                    </label>
                    <label htmlFor="password">用户名 :
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={(e) => this.onHandleChange(e)} />
                    </label>
                    <button type='submit'>提交</button>
                </form>
            </div>
        )
    }
}

export default App
