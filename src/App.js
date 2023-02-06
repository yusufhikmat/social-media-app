
import './App.css';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const currentUser = true
  const Layout =()=>{
    return(
      <div className='app'>     
        <Navbar/>
        <div style={{display:"flex"}}>
        <Leftbar/>
        <div style={{flex:6,}}>
        <Outlet />
        </div>
        <Rightbar />
      </div>
      </div>
    )
  }

const protectedRoute = ({Children})=>{
  if(!currentUser){
    return <Navigate to="/login" />
  }
  return Children
}
  const router = createBrowserRouter([
    {
      path:"/",
      element:<protectedRoute><Layout /></protectedRoute>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
