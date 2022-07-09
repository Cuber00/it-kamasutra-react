import React from 'react';
import ReactDOM from 'react-dom/client';
import {state, addPost, setChangeTextarea, subscribe} from "./redux/state"
import './index.css';
import App from './App';


export const renderWindowDom = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} setChangeTextarea={setChangeTextarea}/>
      </React.StrictMode>
    );
}
renderWindowDom()
subscribe(renderWindowDom)