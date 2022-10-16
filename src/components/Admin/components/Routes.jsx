import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminProduct from './AdminProduct/AdminProduct';
import AdminOrder from './AdminOrder/AdminOrder'
import AdminCatogory from './AdminCategory/Category'
import Dashboard from './Dashboard/Dashboard.jsx'

const Routes = () => {
  return (
    <Switch>
        <Route path='/admin/' exact component={Dashboard}/>
        <Route path='/admin/product' component={AdminProduct}/>
        <Route path='/admin/order' component={AdminOrder}/>
        <Route path='/admin/category' component={AdminCatogory}/>

    </Switch>
  )
}

export default Routes