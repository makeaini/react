import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            books: [
                { name: "你不知道的js", price: 99, count: 1 },
                { name: "js", price: 99, count: 1 },
                { name: "react高级设计", price: 99, count: 2 },
                { name: "vue高级设计", price: 80, count: 3 }
            ],
        }
    }
    addClick(index) {
        const newBooks = [...this.state.books]
        newBooks[index].count++
        this.setState({
            books: newBooks
        })
    }
    addNewBook() {
        //对象类型，数组类型，需要复制一个新的对象，在新的对象中添加，重新赋值
        const newBooks = { name: "java", price: 991, count: 1 }
        const books = [...this.state.books]
        books.push(newBooks)
        this.setState({
            books: books
        })
    }
    render() {
        const { books } = this.state
        return (
            <div>
                <h2>数据列表</h2>
                <ul>
                    {
                        books.map((item, index) => {
                            return (<li key={index}>
                                <span>name:{item.name}-price:{item.price}-count:{item.count}</span>
                                <button onClick={() => this.addClick(index)}>+1</button>
                            </li>
                            )
                        })
                    }
                </ul>
                <button onClick={(e) => this.addNewBook()}>添加一本新书</button>
            </div>
        )
    }
}

export default App
