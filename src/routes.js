import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
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


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkoutOrder" component={CheckoutOrder} />
            <Route path="/checkoutScheduling" component={CheckoutScheduling} />
            <Route path="/contact" component={Contact} />
            <Route path="/inventory" component={Invetory} />
            <Route path="/login" component={Login} />
            <Route path="/myData" component={MyData} />
            <Route path="/myOrder" component={MyOrder} />
            <Route path="/orderResume" component={OrderResume} />
            <Route path="/recoveryPassword" component={RecoveryPassword} />
            <Route path="/register" component={Register} />
            <Route path="/schedulingDetails" component={SchedulingDetails} />
            <Route path="/wishList" component={WishList} />

        </Switch>
    )
}