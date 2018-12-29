https://segmentfault.com/a/1190000012921279#articleHeader6

1、什么是react？
    React 是一个采用声明式，高效而且灵活的用来构建用户界面的框架。
    用来构建UI的JavaScript 库。
    React 不是一个MVC框架，仅仅是视图（V）层的库。

    首先 熟悉 箭头函数， 类， 模板字符串， let， 和 const 声明。

React项目中定义组件的方式有两种：
    1、函数式。
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    2、通过class类来声明定义一个组件
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

上面两个组件在React中是相同的。

为什么使用类来定义一个组件？
  使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
    
注：组件名称必须以大写字母开头。
例如，<div /> 表示一个DOM标签，但 <Welcome /> 表示一个组件，并且在使用该组件时你必须定义或引入它。

2、将函数转换为类
    你可以通过5个步骤将函数组件转换为类
    1、创建一个名称扩展为 React.Component 的ES6 类
    2、创建一个叫做render()的空方法
    3、将函数体移动到 render() 方法中
    4、在 render() 方法中，使用 this.props 替换 props
    5、删除剩余的空函数声明

    class Demo extends React.Component{
      
    }

3、constructor 构造器
    构造器的作用：
    添加一个类构造函数来初始化状态 this.state
    constructor方法是一个特殊的方法，其用于创建和初始化使用class创建的一个对象。
    一个类只能拥有一个名为 “constructor”的特殊方法。

4、生命周期钩子
    1、componentDidMount
    当组件输出到 DOM 后会执行 componentDidMount() 钩子
    2、componentWillUnmount

5、React 的基本使用
  // 1. 导入 react
  import React from 'react'
  import ReactDOM from 'react-dom'

  // 2. 创建 虚拟DOM
  // 参数1：元素名称  参数2：元素属性对象(null表示无)  参数3：当前元素的子元素string||createElement() 的返回值
  const divVD = React.createElement('div', {
    title: 'hello react'
  }, 'Hello React！！！')

  // 3. 渲染
  // 参数1：虚拟dom对象  参数2：dom对象表示渲染到哪个元素内 参数3：回调函数
  ReactDOM.render(divVD, document.getElementById('app')

6、JSX的注意点
  1、 如果在 JSX 中给元素添加类, 需要使用 className 代替 class
  类似：label 的 for属性，使用htmlFor代替
  2、在 JSX 中可以直接使用 JS代码，直接在 JSX 中通过 {} 中间写 JS代码即可
  3、在 JSX 中只能使用表达式，但是不能出现 语句！！！
  4、在 JSX 中注释语法：{/* 中间是注释的内容 */}

7、React组件
  React创建组件的2种方式：
  1、通过 JS函数 创建（无状态组件）
  2、通过 class 创建（有状态组件）

问题：props 来自哪里？
function Welcome(props) {
  // 返回的 react元素中必须只有一个根元素
  return <div>hello, {props.name}</div>
}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

8、组件生命周期函数总览
组件的生命周期包含三个阶段：创建阶段（Mounting）、运行和交互阶段（Updating）、卸载阶段（Unmounting）。
Mounting：
constructor() 
作用：1 获取props 2 初始化state
说明：通过 constructor() 的参数props获取
componentWillMount() 
说明：组件被挂载到页面之前调用，其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染。
注意：无法获取页面中的DOM对象，可以调用 setState() 方法来改变状态值。
用途：发送ajax请求获取数据
render() 
作用：渲染组件到页面中，无法获取页面中的DOM对象
注意：不要在render方法中调用 setState() 方法，否则会递归渲染
原因说明：状态改变会重新调用render()，render()又重新改变状态
componentDidMount() 
  1 、组件已经挂载到页面中
  2 、可以进行DOM操作，比如：获取到组件内部的DOM对象
  3 、可以发送请求获取数据
  4、 可以通过 setState() 修改状态的值
注意：在这里修改状态会重新渲染
Updating
componentWillReceiveProps() 
shouldComponentUpdate() 
componentWillUpdate() 
render() 
componentDidUpdate()
Unmounting
componentWillUnmount()

9、正确的使用状态
  1、不要直接更新状态
this.state.comment = 'Hello'; // Wrong  此代码不会重新渲染组件
this.setState({comment: 'Hello'}); 构造函数是唯一能够初始化 this.state 的地方。
  2、状态更新可能是异步的
  3、状态更新合并