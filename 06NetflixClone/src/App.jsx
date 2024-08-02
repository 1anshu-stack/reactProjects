import HomeScreen from "./components/homeScreen/HomeScreen"
import LoginScreen from "./components/loginScreen/LoginScreen";
import ProfileScreen from "./components/profileScreen/ProfileScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import "./app.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useNavigate } from 'react-router-dom';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const navigation = useNavigate()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, 
      (userAuth) => {
        if(userAuth){
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email
          }))
          console.log("inside app",userAuth);
        }
        else{
          dispatch(logout())
        }
      }
    )

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  )
}

export default App
