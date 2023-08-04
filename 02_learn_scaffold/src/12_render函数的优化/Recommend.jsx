import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {
    constructor(props){
        super(props)
    }
    // shouldComponentUpdate(nextProps) {
    //     if(this.props.counter !== nextProps.counter){
    //         return true
    //     }
    //     return false
    // }
    render() {
        console.log("Recommend render")
        const {counter}  = this.props
        return (
            <div>
                <h2>Recommend Page {counter}</h2>
            </div>
        )
    }
}

export default Recommend
