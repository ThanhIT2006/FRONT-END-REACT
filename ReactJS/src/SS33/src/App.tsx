import ListProduct from './Component/ListProduct'
import Cart from './Component/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  return (
    <div style={{display: "flex", gap: "50px"}}>
      <ListProduct />
      <Cart />
    </div>
  )
}

export default App
