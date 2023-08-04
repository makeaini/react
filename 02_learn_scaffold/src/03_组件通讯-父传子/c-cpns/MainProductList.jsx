import React, { Component } from 'react'

export class MainProductList extends Component {
    render() {
        const { products } = this.props
        return (
            <div>
                <h2>商品列表</h2>
                <ul>
                    {
                        products.map(item => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MainProductList
