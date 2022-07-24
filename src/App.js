import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (
    <>
    <div style={{position : "sticky", top:"0", backgroundColor:"white"}}>
      <Navbar />
    </div>
    
    <AllRoutes />
    </>
  );
}

export default App;
