import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/register/Signup';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import Logout from './pages/auth/logout/Logout';

import { auth } from '../src/firebase';
import Contact from './pages/contact/Contact';

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        // console.log("user is logged out")
      }
    });

  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/contactUs",
      element: <><Navbar /><Contact /></>,
    },

  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
