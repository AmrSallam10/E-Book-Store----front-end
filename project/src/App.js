import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import CartPage from './pages/Cart';
import Layout from './components/layout/Layout';
import OrderDonePage from './pages/OrderDone'; 
import { Checkout } from './pages/Checkout';

function App() {
  return(
    <div>
      <Layout>
      <Switch>
      <Route path='/' exact>
        <Home initialTotal={0}/>
      </Route>
      <Route path='/home' exact>
        <Home/>
      </Route>
      <Route path='/cart'>
        <CartPage/>
      </Route>
      <Route path='/checkout'>
        <Checkout/>
      </Route>
      <Route path='/orderDone'>
        <OrderDonePage/>
      </Route>
      </Switch>
      </Layout>
    </div>);
}

export default App;
