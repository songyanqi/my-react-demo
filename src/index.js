import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'element-react';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'mobx-react'
import App from './App';
import 'element-theme-default';

ReactDOM.render(<BrowserRouter>
    <Button type="primary">
        <App/>
    </Button>
</BrowserRouter>,document.getElementById('root'))
