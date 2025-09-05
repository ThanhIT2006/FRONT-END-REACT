import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Add from './Component/Add';
import Info from './Component/Info';
function App() {

  return (
    <div style={{backgroundColor:"lightgray", position:"absolute", top:"0",padding:"30px", height:"100%"}}>
      <div className="header">
         <Header/>
      </div>
      <div className="body">
          <Add/>
          <Info/>
      </div>
    </div>
  )
}

export default App
