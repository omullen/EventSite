import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <>
    <Router>
      <Header />
        <main>
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/event/:id" element={<EventScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />  
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
          </Routes>
        </Container>
        </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
