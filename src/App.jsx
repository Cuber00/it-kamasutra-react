import "./App.css"
import Aside from "./components/Aside/Aside";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  
  return(
    <div className="App">
      <div className="app-wrapper">
        
        <Header />
        <Aside />
        <main className="app-wrapper-content">
          <Profile />
          {/* <Dialogs /> */}
        </main>
        

      </div>
    </div>
  )
}

export default App;
