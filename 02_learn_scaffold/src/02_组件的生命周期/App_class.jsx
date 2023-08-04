import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "App Component"
        }
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
            </div>)
    }
    //组件被渲染到DOM
    componentDidMount() {

    }
    //组件dom被更新完成 dom更新
    componentDidUpdate() {

    }
    //组件dom卸载，dom移除
    componentWillUnmount(){

    }
    //不常用的生命周期，是否需要渲染页面，返回false，不更新
    shouldComponentUpdate(){
        return true
    }
    //页面渲染完成后render方法后，运行
    getSnapshotBeforeUpdate(){
        
    }
}
export default App