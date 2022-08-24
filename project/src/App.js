import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import CartPage from './pages/Cart';
import Layout from './components/layout/Layout';
import OrderDonePage from './pages/OrderDone'; 
import { Checkout } from './pages/Checkout';
import AllBooksPage from './pages/AllBooks';

function App() {
  return(
    <div>
      <Layout>
      <Switch>
      <Route path='/' exact>
        <AllBooksPage/>
      </Route>
      <Route path='/home' exact>
        <AllBooksPage/>
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
