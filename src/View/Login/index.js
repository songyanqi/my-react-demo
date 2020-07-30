import React,{ Component }from 'react'
import { Table } from 'element-react';
import { $http } from '@/plugins'
const { $get } = $http;
// 学习文档：
// https://elemefe.github.io/element-react/#/zh-CN/datetime-picker
// https://zh-hans.reactjs.org/docs/hooks-intro.html
class Compont extends Component {
    constructor(props) {
        console.log(props,111)
        super(props);
      
        this.state = {
          columns: [
            {
              label: "日期",
              prop: "date",
              width: 180
            },
            {
              label: "姓名",
              prop: "name",
              width: 180
            },
            {
              label: "地址",
              prop: "address"
            }
          ],
          size:10,
          page:0,
          tableData:[]
          
        }
        this.init= this.init.bind(this)
        
      }
      componentWillMount() {
          this.init()
      }
      init(){
        $get(
            '/oms/emotion/hot', { size : this.state.size , page : this.state.page , status : this.state.status },
            ret => res => {
                console.log(res,'数据')
                let data = res.data.data;
                this.setState({
                    tableData : data.content , 
                })
            },
            () => this.setState({ loading : false })
        )
      }
      render() {
        return (
          <Table
            style={{width: '1000px',height:'100%'}}
            columns={this.state.columns}
            minHeight={200}
            data={this.state.data}
          />
        )
      }

      
}
export default Compont;
// export default withRouter( Compont );