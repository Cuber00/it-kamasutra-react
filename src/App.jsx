import "./App.css"
import Aside from "./components/Aside";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  
  return(
    <div className="App">
      <div className="app-wrapper">
        
        <Header />
        <Aside />
        <Profile />

      </div>
    </div>
  )
}

export default App;
