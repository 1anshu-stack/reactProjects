import HomeScreen from "./components/homeScreen/HomeScreen"
import LoginScreen from "./components/loginScreen/LoginScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import "./app.css"

function App() {
  const user = null;

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
