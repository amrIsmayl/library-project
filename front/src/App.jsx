import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';



import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  // function ProtectedRoute(props) {
  //   // console.log(props.children);
  //   if (localStorage.getItem('userToken') === null) {
  //     return <Navigate to='/Login' />
  //   }
  //   else {
  //     return props.children;
  //   }
  // };
  return (
    <>
        <Navbar/>
      <div className="container">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
       </Routes>



      </div>

      <Footer/>

    </>
  );
}

export default App;
