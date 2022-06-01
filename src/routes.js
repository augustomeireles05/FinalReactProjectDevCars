import { useContext } from 'react'

import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import CartSchedulle from './pages/cart/CartSchedulle.jsx'
import MyOrder from './pages/myOrder/MyOrder'
import AboutUs from './pages/aboutUs/AboutUs'
import CheckoutOrder from './pages/checkoutOrder/CheckoutOrder'
import CheckoutScheduling from './pages/checkoutScheduling/CheckoutScheduling'
import Contact from './pages/contact/Contact'
import Invetory from './pages/inventory/Inventory'
import Login from './pages/login/Login'
import MyData from './pages/myData/MyData'
import OrderResume from './pages/orderResume/OrderResume'
import RecoveryPassword from './pages/recoveryPassword/RecoveryPassword'
import Register from './pages/register/Register'
import SchedulingDetails from './pages/schedulingDetails/SchedulingDetails'
import WishList from './pages/wishList/WishList'

import {LoginProvider, LoginContext} from './contexts/login.provider'


export const Routes = () => {
    // const history = useHistory()


    const PrivateRoute = (props) => {
        const { authenticaded, loading } = useContext(LoginContext) 


        if(loading){
            return <div>Carregando ... </div>
        }

        if(!authenticaded){
            return <Redirect to="login"/>
        }

        return <Route {... props} />
    }



    return (
        <Switch>
            <LoginProvider>
                <Route path="/" component={Home} exact />
                <Route path="/product" component={Product} />
                <Route path="/aboutUs" component={AboutUs} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/cartSchedulle" component={CartSchedulle} />
                <PrivateRoute path="/checkoutOrder" component={CheckoutOrder }/>
                <PrivateRoute path="/checkoutScheduling" component={CheckoutScheduling} />
                <Route path="/contact" component={Contact} />
                <Route path="/inventory" component={Invetory} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/myData" component={MyData} />
                <PrivateRoute path="/myOrder" component={MyOrder} />
                <PrivateRoute path="/orderResume" component={OrderResume} />
                <Route path="/recoveryPassword" component={RecoveryPassword} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/schedulingDetails" component={SchedulingDetails} />
                <PrivateRoute path="/wishList" component={WishList} />
            </LoginProvider>
        </Switch>
    )
}