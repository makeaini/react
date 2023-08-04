import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function (props, ref) {
    return (
        <h1 ref={ref}>HelloWorld</h1>
    )
})

export class App extends PureComponent {
    constructor() {
        super()
        this.hwRef = createRef()
    }
    getComponent() {
        console.info(this.hwRef.current)
    }
    render() {
        return (
            <div>
                <HelloWorld ref={this.hwRef} />
                <button onClick={(e) => this.getComponent()}>
                    获取组件实例
                </button>
            </div>
        )
    }
}

export default App
