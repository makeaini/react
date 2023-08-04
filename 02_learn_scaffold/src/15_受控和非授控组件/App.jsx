import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            agree: true,
            bobbies: [
                { value: 'sing', text: '唱', ischecked: false },
                { value: 'jump', text: '跳', ischecked: false },
                { value: 'rap', text: 'rap', ischecked: false },
            ],
            fruit: ['banana']
        }
    }
    onUserSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        const bobbie = this.state.bobbies.filter(item => item.ischecked).map(item => item.value)
        console.log(bobbie)
        console.log(this.state.fruit)
    }
    onHandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onCheckBoxChange(e) {
        this.setState({
            agree: e.target.checked
        })
    }
    onHobbiesChange(e, index) {
        const newHobbies = [...this.state.bobbies]
        newHobbies[index].ischecked = e.target.checked
        this.setState({
            bobbies: newHobbies
        })
    }
    handleFruitChange(e) {
        // this.setState({fruit: e.target.value})
        const options = Array.from(e.target.selectedOptions)
        const values = options.map(item => item.value)
        this.setState({
            fruit: values
        })
    }
    render() {
        const { username, password, agree, bobbies, fruit } = this.state
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
                    <div>
                        <label htmlFor="agree">
                            <input
                                type="checkbox"
                                value={agree}
                                name="agree"
                                onChange={(e) => this.onCheckBoxChange(e)} />
                            是否同意
                        </label>
                    </div>
                    <div>
                        {
                            //checkbox多选
                            bobbies.map((item, index) => {
                                return (
                                    <label htmlFor={item.value}>
                                        <input
                                            type="checkbox"
                                            id={item.value}
                                            checked={item.ischecked}
                                            value={item.value}
                                            onChange={(e) => this.onHobbiesChange(e, index)} />
                                        {item.text}
                                    </label>)
                            })
                        }
                    </div>
                    <select value={fruit} multiple onChange={(e) => this.handleFruitChange(e)}>
                        <option value="apple">草果</option>
                        <option value="organge">橘子</option>
                        <option value="banana">香蕉</option>
                    </select>
                    <button type='submit'>提交</button>
                </form>
            </div>
        )
    }
}

export default App
