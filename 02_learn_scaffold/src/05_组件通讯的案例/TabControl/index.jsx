import React, { Component } from 'react'
import './style.css'
export class TabControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }

    }
    itemClick(params) {
        this.setState({
            currentIndex: params
        })
       this.props.tabClick(params)
    }
    render() {
        const { titles } = this.props
        const { currentIndex } = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item, index) => {
                        return (<div className={`item ${index === currentIndex ? 'active' : ''}`}
                            key={item} onClick={() => this.itemClick(index)}
                        >
                            <span className='text' > {item}</span>
                        </div >)
                    })

                }
            </div >
        )
    }
}

export default TabControl
