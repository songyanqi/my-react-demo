import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); // 使用bind函数，把期望的this值传递给handleChange()函数
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <div>
                <h3>TodoListDemo</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
                {/* <Todo/> */}
                <ClickCounter/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

// 点击计数
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: 0};
    }

    onClickButton() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
          <div>
            <button onClick={this.onClickButton}>Click Me</button>
            <div>
              Click Count: {this.state.count}
            </div>
          </div>
        );
    };
}
// class Todo extends React.Component {
//     render() {
//         return (
//             <p>嘻嘻嘻哈哈哈</p>
//         );
//     }
// }
export default TodoApp;