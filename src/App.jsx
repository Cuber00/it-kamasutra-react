import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Aside from "./components/Aside/Aside";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  
  return(
    <BrowserRouter>
    <div className="App">
      <div className="app-wrapper">
        
        <Header />
        <Aside />
        <main className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </main>

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
