import React, { PureComponent } from 'react'

//定义一个高阶组件,主要是对一个传入的组件进行拦截
function hoc(Cpn) {
    class NewCpn extends PureComponent {
        render() {
            return (
              <Cpn/>
            )
        }   
    }
    return NewCpn
}
class HelloWorld extends PureComponent {
    render() {
        return (
            <h1>HelloWorld</h1>
        )
    }
}
const HellowWorldHoc = hoc(HelloWorld)
export class App extends PureComponent {
    render() {
        return (
            <div>
                <HellowWorldHoc/>
            </div>
        )
    }
}

export default App
