import React , {Component} from 'react'
import { Route , Redirect , Switch } from 'react-router-dom'
import Login from '@/View/Login/index'
// 可以分开写：
// import React from 'react'
// const Component = React.Component
class App extends Component{
    render(){
        return (
            <Switch>
                <Route path='/login' component={ Login } />
                <Route render={ () => <Redirect to='/login' /> } />
            </Switch>
        )
    }
}

export default App;