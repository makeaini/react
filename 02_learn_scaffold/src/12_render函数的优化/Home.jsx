import React, { PureComponent } from 'react'

export class Home extends PureComponent {
    constructor(props) {
        super(props)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.props.message!==nextProps.message){
    //         return true
    //     }
    //     return false
    // }
    render() {
        const { message } = this.props
        console.log("Home render")
        return (
            <div>
                <h2>Home Page,{message}</h2>
            </div>
        )
    }
}

export default Home
