import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import ProductListing from './component/ProductListing';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' components={ProductListing} />
        <Route path="/product/:productID" component={ProductDetails} />
        <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
