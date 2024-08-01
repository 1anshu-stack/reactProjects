import HomeScreen from "./components/homeScreen/HomeScreen"
import LoginScreen from "./components/loginScreen/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import "./app.css"
import { useEffect } from "react";

function App() {
  const user = null;

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, 
      (userAuth) => {
        if(userAuth){
          console.log("inside app",userAuth);
        }
        else{

        }
      }
    )

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  )
}

export default App
