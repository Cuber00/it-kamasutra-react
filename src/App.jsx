import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Aside from "./components/Aside/Aside";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  
  return(
    <BrowserRouter>
    <div className="App">
      <div className="app-wrapper">
        
        <Header />
        <Aside />
        <main className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile postsJSON={props.dataJSON.postsJSON}/>} />
            <Route path="/profile" element={<Profile postsJSON={props.dataJSON.postsJSON}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogJSON={props.dataJSON.dialogJSON} messageJSON={props.dataJSON.messageJSON}/>} />
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
