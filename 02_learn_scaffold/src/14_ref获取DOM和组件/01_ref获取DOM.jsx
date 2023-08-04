import React, { PureComponent ,createRef} from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.titleRef = createRef()
        this.titleEl = null
    }
    getNativeDOM() {
        //第一种方式 ，在React元素绑定一个ref字符串
        // const h2El = this.refs.why
        // console.log(h2El)
        
        //第二种方式，通过创建ref对象，createRef(),将创建出来的对象绑定到元素上，推荐
        console.log(this.titleRef.current);
        //第三种方式 ，传入回调，在我们对应的元素渲染后，回调函数执行
        console.log(this.titleEl);

    }
    render() {
        return (
            <div>
                <h2 ref="why">Hello world</h2>
                <h2 ref={this.titleRef}>Hello world</h2>
                <h2 ref={el=>{this.titleEl = el}}>Hello world</h2>
                <button onClick={(e) => this.getNativeDOM()}>获取dom</button>
            </div>
        )
    }
}

export default App
