import React,{Fragment,Component}from 'react'

// 解决key  问题：
class Compont extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'' , // input中的值
            list:['服务1','服务2'] ,   //服务列表
            inp : ''
        }

        this.addList = this.addList.bind(this) // 改变this的指针，如果不加addList 方法里this  将打印 undefined 
        // this.deleteItem = this.deleteItem.bind(this) //() => this.deleteItem( index )  箭头函数改变了this 指针
    }
    render () {
        console.log( this.props , this.state )
        return (
            <Fragment>
                <div>
                    <input 
                        defaultValue={this.state.inputValue}
                        value={ this.state.value }
                        onChange={ event => this.setState( { inp : event.target.value } ) }
                    /> 
                    {/* <button onClick={this.addList}> 增加服务login </button> */}
                </div>                 
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index+item} 
                                onClick={() => this.deleteItem( index )}
                                dangerouslySetInnerHTML={{__html:item}}>
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // ...这个是ES6的新语法，叫做扩展运算符。意思就是把list数组进行了分解，形成了新的数组，然后再进行组合。这种写法更简单和直观，所以推荐这种写法。
    //   var list=['1','hehe'];
    //   [...list,4]
    // (3) ["1", "hehe", 4]

    // 添加
    addList(){
        console.log(this,'指针')
        
        this.setState({
            list:[...this.state.list,this.state.inp]
        })
    }
    // 删除
    deleteItem( i ){
        console.log(i , this,'select')
        let list = this.state.list
        list.splice( i , 1 )
        this.setState({
            list:list
        })
    }
}
export default Compont;
// export default withRouter( Compont );