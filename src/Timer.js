import React from 'react' //导入 react
// 将函数转换为类 创建一个名称扩展为 React.Component 的ES6 类
class Timer extends React.Component{
    // 获取props 初始化state
    constructor(props){
        super(props)
        this.state = {secondsElapsed:0}
    }
    
    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed +1
        }));
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                seconds:{this.state.secondsElapsed}
            </div>
        )
    }
    
}
export default Timer
