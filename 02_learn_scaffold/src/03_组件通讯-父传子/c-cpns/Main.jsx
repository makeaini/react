import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {
    constructor() {
        super()
        this.state = {
            banners: [],
            productList:[]
        }
    }
    componentDidMount(){
        axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
            const banners = res.data.data.banner.list
            const recommend = res.data.data.recommend.list
            this.setState({
                banners: banners,
                productList: recommend
            })
        })
    }

    render() {
        const {banners,productList} = this.state
        return (
            <div>
                <div className='main'>
                    main
                    <MainBanner banners={banners} title="商品banner"  />
                    <MainProductList products = {productList} />
                </div>
            </div>
        )
    }
}

export default Main
